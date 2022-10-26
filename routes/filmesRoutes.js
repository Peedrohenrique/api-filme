const express = require("express");
const router = express.Router();
//Banner
const ControllerBanner = require("../controllers/ControllerBanner");
const ControllerBannerTerror = require("../controllers/ControllerBannerTerror");

//Filmes
const ControllerFilmesComedia = require("../controllers/ControllerComedia");
const ControllerDocumentario = require("../controllers/ControllerDocumentario");
const ControllerAcao = require("../controllers/ControllerAcao");
const ControllerRomance = require("../controllers/ControllerRomance");
const ControllerAnimacao = require("../controllers/ControllerAnimacao");
const ControllerCrime = require("../controllers/ControllerCrime");
const ControllerTerror = require("../controllers/ControllerTerror");

//Endpoint do Banner
router.get("/banner", ControllerBanner.getAll);
router.get("/bannerTerror", ControllerBannerTerror.getAll);

//Endpoint dos Filmes de Comédia
router.get("/comedia", ControllerFilmesComedia.getAll);
router.get("/comedia/:id", ControllerFilmesComedia.getFindOne);
//Endpoint dos Documentarios
router.get("/documentario", ControllerDocumentario.getAll);
router.get("/documentario/:id", ControllerDocumentario.getFindOne);
//Endpoint dos Filmes de Ação
router.get("/acao", ControllerAcao.getAll);
router.get("/acao/:id", ControllerAcao.getFindOne);
//Endpoint dos Filmes de Romance
router.get("/romance", ControllerRomance.getAll);
router.get("/romance/:id", ControllerRomance.getFindOne);
//Endpoint dos Filmes de Animação
router.get("/animacao", ControllerAnimacao.getAll);
router.get("/animacao/:id", ControllerAnimacao.getFindOne);
//Endpoint dos Filmes de Crime
router.get("/crime", ControllerCrime.getAll);
router.get("/crime/:id", ControllerCrime.getFindOne);
//Endpoint dos Filmes de Terror
router.get("/terror", ControllerTerror.getAll);
router.get("/terror/:id", ControllerTerror.getFindOne);

module.exports = router;
