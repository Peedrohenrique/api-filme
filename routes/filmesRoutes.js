const express = require("express");
const router = express.Router();
//Banner
const ControllerBanner = require("../controllers/ControllerBanner");
//Filmes
const ControllerFilmes = require("../controllers/ControllerFilmes");
const ModelComedia = require("../controllers/ControllerComedia");
const ControllerAcao = require("../controllers/ControllerAcao");
const ControllerAnimacao = require("../controllers/ControllerAnimacao");
const ControllerCrime = require("../controllers/ControllerCrime");
const ControllerDocumentario = require("../controllers/ControllerDocumentario");
const ControllerRomance = require("../controllers/ControllerRomance");
const ControllerTerror = require("../controllers/ControllerTerror");

//Endpoint do Banner
router.get("/banner", ControllerBanner.getAll);
//
router.get("/filmes", ControllerFilmes.getAll);
router.get("/filmes/:id", ControllerFilmes.getFindOne);
//Endpoint Filmes de Comédia
router.get("/comedia", ModelComedia.getAll);
router.get("/comedia/:id", ModelComedia.getFindOne);
//Endpoint Filmes de Ação
router.get("/acao", ControllerAcao.getAll);
router.get("/acao/:id", ControllerAcao.getFindOne);
//Endpoint Filmes de Animação
router.get("/animacao", ControllerAnimacao.getAll);
router.get("/animacao/:id", ControllerAnimacao.getFindOne);
//Endpoint Filmes de Crime
router.get("/crime", ControllerCrime.getAll);
router.get("/crime/:id", ControllerCrime.getFindOne);
//Endpoint Filmes de Documentário
router.get("/Documentario", ControllerDocumentario.getAll);
router.get("/Documentario/:id", ControllerDocumentario.getFindOne);
//Endpoint Filmes de Romance
router.get("/romance", ControllerRomance.getAll);
router.get("/romance/:id", ControllerRomance.getFindOne);
//Endpoint Filmes de Terror
router.get("/terror", ControllerTerror.getAll);
router.get("/terror/:id", ControllerTerror.getFindOne);
module.exports = router;
