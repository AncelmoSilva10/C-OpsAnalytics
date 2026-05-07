var conquistasModel = require("../models/conquistasModel");

function buscarConquistas(req, res) {
    var idUsuario = req.params.idUsuario;

    conquistasModel.buscarConquistas(idUsuario)
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

function cadastrarConquistas(req, res) {
    var titulo = req.body.tituloServer;
    var idUsuario = req.body.idUsuarioServer;

    conquistasModel.cadastrarConquistas(titulo, idUsuario)
        .then((resultadoBanco) => {
            res.status(200).json(resultadoBanco);
        })
        .catch((erro) => {
            console.log("\nErro ao cadastrar conquista:");
            console.log(erro);
            console.log("\nErro SQL: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarConquistas,
    cadastrarConquistas
};