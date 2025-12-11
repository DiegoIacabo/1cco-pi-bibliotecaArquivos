var express = require("express");
var router = express.Router();

var estanteController = require("../controllers/estanteController");

router.get("/:empresaId", function (req, res) {
  estanteController.buscarestantePorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  estanteController.cadastrar(req, res);
})

module.exports = router;