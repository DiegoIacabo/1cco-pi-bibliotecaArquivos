var database = require("../database/config");

function buscarestantePorEmpresa(fkEmpresa) {

  var instrucaoSql = `SELECT * FROM estante a WHERE fk_empresa = ${fkEmpresa}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}



function cadastrarSecao (secao, descricao, fkEmpresa) {
  
  var instrucaoSql = `INSERT INTO estante (secao, descricao, fk_empresa)  VALUES ('${secao}','${descricao}', ${fkEmpresa})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUltimasMedidas(idEstante, limite_linhas) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        dt_medida,
                        DATE_FORMAT(dt_medida,'%H:%i:%s') as momento_grafico
                    FROM medida
                    JOIN estante as e ON e.id = fk_estante
                    WHERE e.id = ${idEstante}
                    ORDER BY e.id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
  buscarestantePorEmpresa,
  cadastrarSecao,
  buscarUltimasMedidas

}
