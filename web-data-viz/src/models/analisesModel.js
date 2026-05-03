var database = require("../database/config")

function buscarPosicoes(idMapa, idUsuario) {
    console.log("ACESSEI O PARTIDA MODEL \n function buscarPosicoes():", idMapa);

    var instrucaoSql = `
        SELECT pe.tipo_evento, pe.posicao_x, pe.posicao_y FROM posicao_evento pe
	        INNER JOIN sesao_mapa sm ON sm.idsesao_mapa = pe.fk_sesao_mapa
		WHERE sm.fk_mapa = ${idMapa} AND pe.fk_usuario = ${idUsuario};
    `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPosicoes
};