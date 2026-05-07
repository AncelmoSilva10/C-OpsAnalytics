var express = require("express");
var router = express.Router();

var conquistasController = require("../controllers/conquistasController");

router.get("/titulos/:idUsuario", function (req, res) {
    conquistasController.buscarConquistas(req, res);
});

router.post("/cadastrar", function (req, res) {
    conquistasController.cadastrarConquistas(req, res);
});

module.exports = router;
