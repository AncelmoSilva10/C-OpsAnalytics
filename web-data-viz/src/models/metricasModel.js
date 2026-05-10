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

module.exports = {
    buscarWinRatingPorMapa
};