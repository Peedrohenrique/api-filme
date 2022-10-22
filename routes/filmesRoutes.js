const express = require("express");
const router = express.Router();
//Banner
const ControllerBanner = require("../controllers/ControllerBanner");
//Filmes
const ControllerFilmes = require("../controllers/ControllerFilmes");
const ControllerFilmesComedia = require("../controllers/ControllerComedia");
const ControllerFilmesAcao = require("../controllers/ControllerAcao");

//Endpoint do Banner
router.get("/banner", ControllerBanner.getAll);
//
router.get("/filmes", ControllerFilmes.getAll);
router.get("/filmes/:id", ControllerFilmes.getFindOne);
//Endpoint dos Filmes de Comédia
router.get("/comedia", ControllerFilmesComedia.getAll);
router.get("/comedia/:id", ControllerFilmesComedia.getFindOne);
//Endpoint dos Filmes de Ação
router.get("/acao", ControllerFilmesComedia.getAll);
router.get("/acao/:id", ControllerFilmesComedia.getFindOne);

module.exports = router;
