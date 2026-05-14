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

function editarConquistas(req, res) {
    var idConquista = req.params.idConquista;
    var tituloNovo = req.body.tituloServer;

    if (tituloNovo == undefined) {
        res.status(400).send("Seu titulo editado está undefined!");
    } else {
        conquistasModel.editarConquistas(idConquista, tituloNovo)
            .then((resultadoBanco) => {
                res.status(200).json(resultadoBanco);
            })
            .catch((erro) => {
                console.log("\nErro ao editar conquista:");
                console.log(erro);
                console.log("\nErro SQL: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }

}

function deletarConquistas(req, res) {
    var idConquista = req.params.idConquista;

    conquistasModel.deletarConquistas(idConquista)
        .then(respostaBanco => {
            res.status(200).json(respostaBanco);
        })
        .catch((erro) => {
            console.log("\nErro ao deletar conquista:");
            console.log(erro);
            console.log("\nErro SQL: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarConquistas,
    cadastrarConquistas,
    editarConquistas,
    deletarConquistas
};