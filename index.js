const express = require("express");
const server = express();
const filmes = require("./src/data/filmes.json");

//Rotas
server.get("/filmes", (req, res) => {
  return res.json(filmes);
});

server.listen(3000, () => {
  console.log("Servidor está funcionado...");
});
