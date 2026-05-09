var database = require("../database/config")

function buscarConquistas(idUsuario) {
    console.log("ACESSEI O PARTIDA MODEL \n function buscarConquistas():", idUsuario);

    var instrucaoSql = `
            SELECT idConquista, titulo FROM conquista
	            WHERE fk_usuario = ${idUsuario};
        `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarConquistas(titulo, idUsuario) {
    console.log("ACESSEI O PARTIDA MODEL \n function cadastrarConquistas():", titulo);

    var instrucaoSql = `
            INSERT INTO conquista(titulo, fk_usuario)
	            VALUES('${titulo}', ${idUsuario});
        `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editarConquistas(idConquista, tituloNovo){
    console.log("ACESSEI O PARTIDA MODEL \n function editarConquista():", idConquista, tituloNovo);

    var instrucaoSql = `
            UPDATE conquista
	            SET titulo = '${tituloNovo}'
		            WHERE idConquista = ${idConquista};
        `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarConquistas,
    cadastrarConquistas,
    editarConquistas
};