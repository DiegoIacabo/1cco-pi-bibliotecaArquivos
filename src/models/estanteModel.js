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


module.exports = {
  buscarestantePorEmpresa,
  cadastrarSecao

}
