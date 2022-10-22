const express = require("express");
const router = express.Router();
//Banner
const ControllerBanner = require("../controllers/ControllerBanner");
//Filmes

const ControllerAcao = require("../controllers/ControllerAcao");
const ControllerFilmesComedia = require("../controllers/ControllerComedia");

//Endpoint do Banner
router.get("/banner", ControllerBanner.getAll);
//
router.get("/acao", ControllerAcao.getAll);
router.get("/acao/:id", ControllerAcao.getFindOne);
//Endpoint dos Filmes de Comédia
router.get("/comedia", ControllerFilmesComedia.getAll);
router.get("/comedia/:id", ControllerFilmesComedia.getFindOne);

module.exports = router;
