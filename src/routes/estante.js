var express = require("express");
var router = express.Router();

var estanteController = require("../controllers/estanteController");

router.get("/:fkEmpresa", function (req, res) {
  estanteController.buscarstantePorEmpresa(req, res);
});

router.get("/ultimas/:idEmpresa", function (req, res) {
    estanteController.buscarUltimasMedidas(req, res);
});


router.post("/secao", function (req, res) {
  estanteController.cadastrarEstante(req, res);
})

module.exports = router;