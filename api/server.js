// Importações essenciais
const express = require("express");
const path = require("path");

const env = process.env.NODE_ENV || "desenvolvimento";

if (env === "produção") {
  console.log("Rodando em produção");
}else{
  require("dotenv").config();
  console.log("Rodando em desenvolvimento");
}

const nodemailer = require("nodemailer");
const { type } = require("os");

const porta = process.env.PORTA || 3000;
const servico = process.env.SERVICO;
const emailOrigem = process.env.EMAIL_ORIGEM;
const emailDestino = process.env.EMAIL_DESTINO;
const senha = process.env.SENHA;

// configurações do servidor
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const transportador = nodemailer.createTransport({
  service: servico,
  auth: {
    user: emailOrigem,
    pass: senha,
  },
});

async function enviarEmail(texto) {
  console.log(texto);
  try {
    const mensagem = await transportador.sendMail({
      from: emailOrigem,
      to: emailDestino,
      subject: "FORMULÁRIO DE PESQUISA (teste)",
      html: `
      <h1>Formulário de Pesquisa</h1>
      <h2>Perguntas e Respostas</h2>
      <h3>1-Já usou este tipo de serviço?</h3>
      <p>${texto.respota1}</p>
      <h3>2-O que já ouviu sobre este tipo de serviço?</h3>
      <p>${texto.respota2}</p>
      <h3>3-Gostaria de ter um intermediario a controlar o prosseço de transporte da encomenda?</h3>
      <p>${texto.respota3}</p>
      <h3>4-Acha que trocar o contato é a maneira mais segura de garantir que a encomenda chegue?</h3>
      <p>${texto.respota4}</p>
      <h3>5-O que farias se a encomenda não chegasse ao destino?</h3>
      <p>${texto.respota5}</p>
      <h3>6-Confiarias a tua encomenda a um total estranho?</h3>
      <p>${texto.respota6}</p>
      <h3>7-Aceitarias fazer um dinheiro extra durante a sua viagem?</h3>
      <p>${texto.respota7}</p>
      <h3>8-Que garantias darias ao dono da encomenda?</h3>
      <p>${texto.respota8}</p>
      <h3>9-Como tu defines que uma pessoa pode levar a sua encomenda?</h3>
      <p>${texto.respota9}</p>
      <h3>10-Dirias que existe um problema na forma como estes serviços são executados atualmente?</h3>
      <p>${texto.respota10}</p>
      <h3>11-Como poderias melhorar esse tipo de serviço?</h3>
      <p>${texto.respota11}</p>
      <p>Desenvolvedores:<br>Alexandre Junqueiro / Yurivaldo Domingos</p>
      `,
    });

    console.log("email enviado", mensagem.messageId);
    console.table(texto);
  } catch (error) {
    console.log(" erro [enviarEmail()]", error);
  }
}

// Rotas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/enviar", (req, res) => {
  let conteudo = req.body;
  enviarEmail(conteudo);
  res.json({ message: "Email enviado com sucesso!" });
});

/* app.listen(porta, () => {
  console.log(`Servidor rodando na porta http://localhost:${porta}`);
}); */

module.exports = app;
