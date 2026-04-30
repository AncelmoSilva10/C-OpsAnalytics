var estatisticaModel = require("../models/estatisticaModel");

function buscarTotalAbates(req, res) {
    var idUsuario = req.params.idUsuario;


    estatisticaModel.buscarTotalAbates(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(204).send("Nenhum resultado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarTotalMortes(req, res) {
    var idUsuario = req.params.idUsuario;


    estatisticaModel.buscarTotalMortes(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(204).send("Nenhum resultado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarPatente(req, res) {
    var idUsuario = req.params.idUsuario;

    estatisticaModel.buscarPatente(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(204).send("Nenhum resultado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarWinRating(req, res) {
    var idUsuario = req.params.idUsuario;

    estatisticaModel.buscarWinRating(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(204).send("Nenhum resultado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


function buscarKillsPorMapa(req, res) {
    var idUsuario = req.params.idUsuario;
    estatisticaModel.buscarKillsPorMapa(idUsuario)
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

function buscarArmaUtilizada(req, res) {
    var idUsuario = req.params.idUsuario;
    estatisticaModel.buscarArmaUtilizada(idUsuario)
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
    buscarTotalAbates,
    buscarTotalMortes,
    buscarPatente,
    buscarWinRating,
    buscarKillsPorMapa,
    buscarArmaUtilizada
};