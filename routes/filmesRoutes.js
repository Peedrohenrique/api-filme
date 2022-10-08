const express = require("express");
const router = express.Router();
const filmes = require("../src/data/filmes.json");

router.get("/filmes", (req, res) => {
  return res.json(filmes);
});

module.exports = router;
