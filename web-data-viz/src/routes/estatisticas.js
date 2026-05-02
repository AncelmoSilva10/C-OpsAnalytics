var express = require("express");
var router = express.Router();

var estatisticaController = require("../controllers/estatisticaController");

router.get("/abates/:idUsuario", function (req, res) {
    estatisticaController.buscarTotalAbates(req, res);
});

router.get("/mortes/:idUsuario", function (req, res) {
    estatisticaController.buscarTotalMortes(req, res);
});

router.get("/pontos/:idUsuario", function (req, res) {
    estatisticaController.buscarPatente(req, res);
});

router.get("/vitorias/:idUsuario", function (req, res) {
    estatisticaController.buscarWinRating(req, res);
});

router.get("/killsPorMapa/:idUsuario", function (req, res) {
    estatisticaController.buscarKillsPorMapa(req, res);
});

router.get("/armaUtilizada/:idUsuario", function (req, res) {
    estatisticaController.buscarArmaUtilizada(req, res);
});

router.get("/mapasWinRating/:idUsuario", function (req, res) {
    estatisticaController.buscarMapasWinRating(req, res);
});

router.get("/frequencia/:idUsuario", function (req, res) {
    estatisticaController.buscarFrequencia(req, res);
});

module.exports = router;