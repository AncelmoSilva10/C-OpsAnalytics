var database = require("../database/config")

function cadastrarEvento(tipo, posicaoX, posicaoY, id_usuario, id_round, id_armamento, id_sessao_mapa) {
    console.log("ACESSEI O PARTIDA MODEL \n function cadastrarPartida():", tipo, posicaoX, posicaoY, id_usuario, id_round, id_armamento, id_sessao_mapa);

    var instrucaoSql = `
        INSERT INTO posicao_evento(tipo_evento, posicao_x, posicao_y, fk_usuario, fk_round, fk_armamento, fk_sesao_mapa)
	        VALUES ('${tipo}', ${posicaoX}, ${posicaoY}, ${id_usuario}, ${id_round}, ${id_armamento}, ${id_sessao_mapa});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    cadastrarEvento
};