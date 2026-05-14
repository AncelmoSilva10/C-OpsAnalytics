var eventoModel = require("../models/eventoModel");

function dadosEvento(req, res) {

    var tipo = req.body.tipoServer;
    var posicaoX = req.body.xServer;
    var posicaoY = req.body.yServer;
    var id_usuario = req.body.usuarioServer;
    var id_round = req.body.roundServer;
    var id_armamento = req.body.armaServer;
    var id_sessao_mapa = req.body.sessaoServer;

    if (tipo == undefined) {
        res.status(400).send("O tipo está undefined!");
    } else if (posicaoX == undefined) {
        res.status(400).send("Posição X está undefined!");
    } else if (posicaoY == undefined) {
        res.status(400).send("Posição Y está undefined!");
    } else if (id_usuario == undefined) {
        res.status(400).send("Id do usuario está undefined!");
    } else if (id_round == undefined) {
        res.status(400).send("o Id do round está undefined!");
    } else if (id_armamento == undefined) {
        res.status(400).send("O Id do Armamento está undefined!");
    } else if (id_sessao_mapa == undefined) {
        res.status(400).send("o Id da sessão do mapa está undefined!");
    } else {

        eventoModel.cadastrarEvento(tipo, posicaoX, posicaoY, id_usuario, id_round, id_armamento, id_sessao_mapa)
            .then((resultadoBanco) => {
                res.status(200).json(resultadoBanco);
            })
            .catch((erro) => {
                console.log("\nErro ao cadastrar evento no round:");
                console.log(erro);
                console.log("\nErro SQL: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }

}


module.exports = {
    dadosEvento
}