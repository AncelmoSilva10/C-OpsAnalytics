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
        SELECT  
	    CASE
		    WHEN p.qt_pontos < 0 THEN u.qt_pontos - p.qt_pontos
            ELSE u.qt_pontos + p.qt_pontos
	    END pontos_atuais
    FROM usuario u 
    INNER JOIN partida p ON p.fk_usuario = u.idUsuario
	  WHERE u.idUsuario = ${idUsuario} ORDER BY pontos_atuais DESC LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTotalAbates,
    buscarTotalMortes,
    buscarPatente
};