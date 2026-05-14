var express = require("express");
var router = express.Router();

var metricasController = require("../controllers/metricasController");

router.get("/winRatingMapa/:idUsuario", function (req, res) {
    metricasController.buscarWinRatingPorMapa(req, res);
});

router.get("/historicoPartida/:idUsuario", function (req, res) {
    metricasController.buscarHistorico(req, res);
});


module.exports = router;