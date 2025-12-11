var express = require("express");
var router = express.Router();

var estanteController = require("../controllers/estanteController");

router.get("/:fkEmpresa", function (req, res) {
  estanteController.buscarestantePorEmpresa(req, res);
});

router.post("/estante", function (req, res) {
  estanteController.cadastrarEstante(req, res);
})

module.exports = router;