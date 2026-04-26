var roundModel = require("../models/roundModel");

function dadosRound(req, res) {
    var numero_round = req.body.numeroRoundServer;
    var duracao_round = req.body.duracaoServer;
    var vitoria_round = req.body.vitoriaServer;
    var idPartida = req.body.partidaServer;

    if (numero_round == undefined) {
        res.status(400).send("O número do round está undefined!");
    } else if (duracao_round == undefined) {
        res.status(400).send("A duração do round está undefined!");
    } else if (vitoria_round == undefined) {
        res.status(400).send("O campo de vitória está undefined!");
    } else if (idPartida == undefined) {
        res.status(400).send("a Fk da partida está undefined!");
    } else {

        roundModel.cadastrarRound(numero_round, vitoria_round, duracao_round, idPartida)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro do round! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );

    }

}

module.exports = {
    dadosRound
}