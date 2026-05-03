var express = require("express");
var router = express.Router();

var analisesController = require("../controllers/analisesController");

router.get("/historicoMapa/:idMapa/:idUsuario", function (req, res) {
    analisesController.buscarPosicoes(req, res);
});


module.exports = router;