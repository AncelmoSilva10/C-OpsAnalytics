var metricasModel = require("../models/metricasModel");

function buscarWinRatingPorMapa(req, res) {
    var idUsuario = req.params.idUsuario;

    metricasModel.buscarWinRatingPorMapa(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    buscarWinRatingPorMapa
};