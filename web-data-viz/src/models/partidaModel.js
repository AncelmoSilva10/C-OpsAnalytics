var database = require("../database/config")

function cadastrarPartida(data_partida, duracao, roundsTR, roundsCT, resultado, usuario, mapa) {
    console.log("ACESSEI O PARTIDA MODEL \n function cadastrarPartida():", data_partida, duracao, roundsTR, roundsCT, resultado, usuario, mapa);

   
    var sqlData = (data_partida == "" || data_partida == null) ? "CURRENT_TIMESTAMP" : `'${data_partida}'`;

    var instrucaoSql = `
            INSERT INTO partida(data_partida, duracao_media, rounds_TR, rounds_CT, resultado, fk_usuario, fk_mapa) 
            VALUES (${sqlData}, ${duracao}, ${roundsTR}, ${roundsCT}, ${resultado}, ${usuario}, ${mapa});
        `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarPartida
};