const express = require("express");
const app = express();
const cors = require("cors");
const filmes = require("./src/data/filmes.json");

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});

//Rotas
app.get("/filmes", (req, res) => {
  return res.json(filmes);
});

app.listen(3000, () => {
  console.log("Servidor está funcionado...");
});
