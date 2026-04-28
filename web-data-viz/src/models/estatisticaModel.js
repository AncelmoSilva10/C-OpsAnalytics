var database = require("../database/config")

function buscarTotalAbates(idUsuario) {
    console.log("ACESSEI O PARTIDA MODEL \n function buscarTotalAbates():", idUsuario);

    var instrucaoSql = `
        SELECT COUNT(tipo_evento) AS total_abates FROM posicao_evento
	        WHERE tipo_evento = 'Abate' AND fk_usuario = ${idUsuario};
    `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTotalMortes(idUsuario) {
    console.log("ACESSEI O PARTIDA MODEL \n function buscarTotalMortes():", idUsuario);

    var instrucaoSql = `
        SELECT COUNT(tipo_evento) AS total_mortes FROM posicao_evento
	        WHERE tipo_evento = 'Morte' AND fk_usuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTotalAbates,
    buscarTotalMortes
};