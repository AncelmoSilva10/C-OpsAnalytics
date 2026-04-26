var express = require("express");
var router = express.Router();

var roundController = require("../controllers/roundController");

router.post("/cadastrar", function(req, res){
    roundController.dadosRound(req, res);
});


module.exports = router;