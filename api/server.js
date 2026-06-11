// Importações essenciais
const express = require("express");
const path = require("path");
require("dotenv").config();
const porta = process.env.PORTA || 3000;

// configurações do servidor
const app = express();
app.use(express.json());
app.use(express.static(path.join("frontend")));

// Rotas
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

/* app.listen(porta,() => {
  console.log(`Servidor rodando na porta http://localhost:${porta}`);
}); */

module.exports = app;
