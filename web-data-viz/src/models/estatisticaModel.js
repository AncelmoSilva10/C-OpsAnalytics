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

function buscarPatente(idUsuario) {
    console.log("ACESSEI O PARTIDA MODEL \n function buscarPatente():", idUsuario);

    var instrucaoSql = `
        SELECT  (u.qt_pontos + p.qt_pontos) AS pontos_atuais FROM usuario u 
	        INNER JOIN partida p ON p.fk_usuario = u.idUsuario
	WHERE u.idUsuario = ${idUsuario} LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarWinRating(idUsuario) {
    console.log("ACESSEI O PARTIDA MODEL \n function buscarWinRating():", idUsuario);

    var instrucaoSql = `
        SELECT 
            TRUNCATE((tv.total_vitorias * 100.0 / t.total_partidas),0) AS win_rate
        FROM 
            (SELECT COUNT(*) AS total_vitorias FROM partida WHERE resultado = 1 AND fk_usuario = ${idUsuario}) AS tv,
            (SELECT COUNT(*) AS total_partidas FROM partida WHERE fk_usuario = ${idUsuario}) AS t;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTotalAbates,
    buscarTotalMortes,
    buscarPatente,
    buscarWinRating
};