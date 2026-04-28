var express = require("express");
var router = express.Router();

var estatisticaController = require("../controllers/estatisticaController");

router.get("/abates/:idUsuario", function (req, res) {
    estatisticaController.buscarTotalAbates(req, res);
});

router.get("/mortes/:idUsuario", function (req, res) {
    estatisticaController.buscarTotalMortes(req, res);
});

module.exports = router;