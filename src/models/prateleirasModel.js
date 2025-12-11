var database = require("../database/config");

function buscarprateleirasPorEmpresa(empresaId) {

  var instrucaoSql = `SELECT * FROM prateleiras a WHERE fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) prateleiras VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarprateleirasPorEmpresa,
  cadastrar
}
