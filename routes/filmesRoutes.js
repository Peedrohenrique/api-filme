const express = require("express");
const router = express.Router();
const ControllerFilmes = require("../controllers/ControllerFilmes");

router.get("/filmes", ControllerFilmes.getAll);
router.get("/filmes/:id", ControllerFilmes.getFindOne);
module.exports = router;
