var database = require("../database/config")

function buscarConquistas(idUsuario){
    console.log("ACESSEI O PARTIDA MODEL \n function buscarConquistas():", idUsuario);
    
        var instrucaoSql = `
            SELECT titulo FROM conquista
	            WHERE fk_usuario = ${idUsuario};
        `;
    

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

module.exports = {
    buscarConquistas
};