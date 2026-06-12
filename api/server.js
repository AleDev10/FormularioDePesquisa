// Importações essenciais
const express = require("express");
const path = require("path");
require("dotenv").config();
const nodemailer = require("nodemailer");

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
  try {
    const mensagem = await transportador.sendMail({
      from: emailOrigem,
      to: emailDestino,
      subject: "Mensagem de teste",
      text: texto || "Texto corronpidos",
    });

    console.log("email enviado", mensagem.messageId);
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
  enviarEmail(conteudo.text);
  res.json({ message: "Email enviado com sucesso!" });
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta http://localhost:${porta}`);
});

module.exports = app;
