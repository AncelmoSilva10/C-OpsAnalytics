var database = require("../database/config")

function buscarWinRatingPorMapa(idUsuario) {
    console.log("ACESSEI O PARTIDA MODEL \n function buscarWinRatingPorMapa():", idUsuario);

    var instrucaoSql = `
        SELECT TRUNCATE(AVG(p.resultado)*100, 0) win_rating, m.nome_mapa FROM partida p
			INNER JOIN mapa m ON m.idMapa = p.fk_mapa
				WHERE p.fk_usuario = ${idUsuario} GROUP BY  p.fk_mapa;
    `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHistorico(idUsuario) {
    console.log("ACESSEI O PARTIDA MODEL \n function buscarHistorico():", idUsuario);

    var instrucaoSql = `
        SELECT 
            p.idPartida,
            TRUNCATE(COALESCE(
                SUM(CASE WHEN pe.tipo_evento = 'Abate' THEN 1 ELSE 0 END) / 
                NULLIF(SUM(CASE WHEN pe.tipo_evento = 'Morte' THEN 1 ELSE 0 END), 0), 
                SUM(CASE WHEN pe.tipo_evento = 'Abate' THEN 1 ELSE 0 END) 
            ), 2) AS kd_resultado
            FROM partida p
	        INNER JOIN mapa m ON m.idMapa = p.fk_mapa
	        INNER JOIN sesao_mapa sm ON sm.fk_mapa = m.idMapa
	        INNER JOIN posicao_evento pe ON pe.fk_sesao_mapa = sm.idsesao_Mapa
	            WHERE pe.fk_usuario = ${idUsuario}
                    GROUP BY p.idPartida ORDER BY p.idPartida DESC LIMIT 6;
    `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarWinRatingPorMapa,
    buscarHistorico
};