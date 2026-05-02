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
	WHERE u.idUsuario = ${idUsuario} ORDER BY pontos_atuais LIMIT 1;
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

function buscarKillsPorMapa(idUsuario) {
    console.log("ACESSEI O PARTIDA MODEL \n function buscarKillsPorMapa():", idUsuario);

    var instrucaoSql = `
        SELECT p.resultado AS resultado,
    SUM(CASE WHEN po.tipo_evento = 'Abate' THEN 1 ELSE 0 END) AS total_kills,
    SUM(CASE WHEN po.tipo_evento = 'Morte' THEN 1 ELSE 0 END) AS total_mortes,
     m.nome_mapa AS 'mapa_partida'
FROM partida p
	INNER JOIN mapa m ON p.fk_mapa = m.idmapa
	INNER JOIN round r ON r.fk_partida = p.idpartida
	INNER JOIN posicao_evento po ON po.fk_round = r.idround
		WHERE p.fk_usuario = ${idUsuario}
		GROUP BY p.idpartida, m.nome_mapa, p.resultado
		ORDER BY p.idpartida DESC LIMIT 4;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarArmaUtilizada(idUsuario) {
    console.log("ACESSEI O PARTIDA MODEL \n function buscarArmaUtilizada():", idUsuario);

    var instrucaoSql = `
        SELECT a.tipo_armamento, COUNT(po.fk_armamento) AS total_utilizada, a.imagem_url_armamento FROM armamento a
	        INNER JOIN posicao_evento po ON a.idarmamento = po.fk_armamento
                WHERE po.fk_usuario = ${idUsuario}
		            GROUP BY a.idarmamento ORDER BY total_utilizada DESC LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMapasWinRating(idUsuario) {
    console.log("ACESSEI O PARTIDA MODEL \n function buscarMapasWinRating():", idUsuario);

    var instrucaoSql = `
    SELECT p.fk_mapa, m.nome_mapa, m.idMapa, COUNT(p.fk_mapa) AS quantidade_mapa, ROUND((SUM(p.resultado) / COUNT(p.fk_mapa) * 100))AS win_ratign FROM partida p
	    INNER JOIN mapa m ON p.fk_mapa = m.idMapa 
		    WHERE p.fk_usuario = ${idUsuario} GROUP BY p.fk_mapa ORDER BY win_ratign DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarFrequencia(idUsuario) {
    console.log("ACESSEI O PARTIDA MODEL \n function buscarMapasWinRating():", idUsuario);

    var instrucaoSql = `
    SELECT DATE_FORMAT(data_partida, '%d/%m/%Y') AS dia_formatado, COUNT(*) AS quantidade FROM partida
        WHERE fk_usuario = 1 GROUP BY dia_formatado ORDER BY MAX(data_partida) DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTotalAbates,
    buscarTotalMortes,
    buscarPatente,
    buscarWinRating,
    buscarKillsPorMapa,
    buscarArmaUtilizada,
    buscarMapasWinRating,
    buscarFrequencia
};