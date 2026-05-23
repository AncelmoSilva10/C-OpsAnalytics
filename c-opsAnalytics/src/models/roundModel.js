var database = require("../database/config")

function cadastrarRound(numero_round, vitoria_round, idPartida) {
    console.log("ACESSEI O PARTIDA MODEL \n function cadastrarRound():", numero_round, vitoria_round, idPartida);

    var instrucaoSql = `
        INSERT INTO round (numero_round, vitoria_equipe, fk_partida)
	    VALUES (${numero_round}, '${vitoria_round}', ${idPartida});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarRound
};