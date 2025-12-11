var estanteModel = require("../models/estanteModel");

function buscarestantePorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  estanteModel.buscarestantePorEmpresa(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os estante: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}




function cadastrarEstante(req, res) {

  var secao = req.body.secaoServer;
  var descricao = req.body.descricaoServer;
  var fkEmpresa = req.body.idEmpresaServer;


  if (secao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (descricao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (fkEmpresa == undefined) {
    res.status(400).send("fkEmpresa está undefined!");
  } else {


    estanteModel.cadastrarSecao(secao, descricao, fkEmpresa)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarestantePorEmpresa,
  cadastrarEstante
}