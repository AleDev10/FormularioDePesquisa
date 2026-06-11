// Importações essenciais
const express = require("express");
const path = require("path");
const { send } = require("process");
require("dotenv").config();
const porta = process.env.PORTA || 3000;

// configurações do servidor
const app = express();
app.use(express.json());
app.use(express.static(path.join("public")));

// Rotas
app.use("/", (req, res) => {
  res.send("mundo lindo");
  //res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* app.listen(porta,() => {
  console.log(`Servidor rodando na porta http://localhost:${porta}`);
}); */

module.exports = app;
