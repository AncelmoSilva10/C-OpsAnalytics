var express = require("express");
var router = express.Router();

var metricasController = require("../controllers/metricasController");

router.get("/historicoPartida/:idUsuario", function (req, res) {
    metricasController.buscarWinRatingPorMapa(req, res);
});


module.exports = router;