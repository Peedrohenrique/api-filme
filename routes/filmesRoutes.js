const express = require("express");
const router = express.Router();
//Filmes
const ControllerFilmes = require("../controllers/ControllerFilmes");
const ControllerFilmesComedia = require("../controllers/ControllerFilmesComedia");

router.get("/filmes", ControllerFilmes.getAll);
router.get("/filmes/:id", ControllerFilmes.getFindOne);
// Rota de Filmes de Comédia
router.get("/comedia", ControllerFilmesComedia.getAll);
router.get("/comedia/:id", ControllerFilmesComedia.getFindOne);
module.exports = router;
