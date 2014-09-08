///
// Arquivo para configurar as rotas do express
///

var express = require('express');
var router = express.Router();
var _carne = require('./controller');

var cb = function(err, data, res, view, message){
	if (err) {
		msg = 'Erro na listagem '+err;
	}
	else{
		msg = data;
	}
	console.log(msg);
	res.json(msg);
}

// Lista as carnes
router.get('/', function (req, res){
	_carne.listar(req, res, cb);
});

// Cadastrar nova carne
router.post('/', function (req, res) {
	_carne.cadastrar(req, res, cb);
})

module.exports = router;