var express = require("express");
var router = express.Router();

var eventoController = require("../controllers/eventoController");

router.post("/cadastrar", function(req, res){
    eventoController.dadosEvento(req, res);
});


module.exports = router;