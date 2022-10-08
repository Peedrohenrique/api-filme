const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const filmes = require("./src/data/filmes.json");

app.use(express.json());

//Rotas
app.get("/filmes", (req, res) => {
  return res.json(filmes);
});

app.listen(port, () => {
  console.log("Servidor está funcionado...");
});
