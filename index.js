const express = require("express");
const cors = require("cors");
const server = express();
const filmes = require("./src/data/filmes.json");

server.use(express.json());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  server.use(cors());
  next();
});

//Rotas
server.get("/filmes", (req, res) => {
  return res.json(filmes);
});

server.listen(3000, () => {
  console.log("Servidor está funcionado...");
});
