var express = require("express");
var router = express.Router();

var prateleirasController = require("../controllers/prateleirasController");

router.get("/:empresaId", function (req, res) {
  prateleirasController.buscarprateleirasPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  prateleirasController.cadastrar(req, res);
})

module.exports = router;