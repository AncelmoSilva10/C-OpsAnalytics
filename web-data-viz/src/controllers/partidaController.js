var partidaModel = require("../models/partidaModel");

function dadosPartida(req, res) {
    var data_partida = req.body.data_partidaServer;
    var duracao = req.body.duracaoServer;
    var roundsTR = req.body.roundsTRServer;
    var roundsCT = req.body.roundsCTServer;
    var qtPontos = req.body.qtPontosServer;
    var usuario = req.body.usuarioServer;
    var resultado = req.body.resultadoServer;
    var mapa = req.body.mapaServer;


    if (duracao == undefined) {
        res.status(400).send("A duração está undefined!");
    } else if (roundsTR == undefined) {
        res.status(400).send("A quantidade de rounds de TR está undefined!");
    } else if (roundsCT == undefined) {
        res.status(400).send("A quantidade de rounds de CT está undefined!");
    } else if (qtPontos == undefined) {
        res.status(400).send("A quantidade de pontos está undefined!");
    } else if (mapa == undefined) {
        res.status(400).send("O número do mapa está undefined!");
    } else if (usuario == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    } else {

        partidaModel.cadastrarPartida(data_partida, duracao, roundsTR, roundsCT, qtPontos, resultado, usuario, mapa)
            .then((resultadoBanco) => {
                res.status(200).json(resultadoBanco);
            })
            .catch((erro) => {
                console.log("\nErro ao cadastrar partida:");
                console.log(erro);
                console.log("\nErro SQL: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    dadosPartida,
};