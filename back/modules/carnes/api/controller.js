///
// Arquivo da classe controladora do CRUD de carne
///

// Importa a model e o http
var Carne = require('../model');
var http = require('http');
var mensagem ='';

module.exports = {
	cadastrar: function (req, res, cb) {
		var msg = 'Cadastrada carne';
		var view = 'carnes/cadastrar';

		var dados = req.body;
		console.log(dados);

		var carne = new Carne(dados);

		carne.save(function (err, data) {
			cb(err, data, res, view, msg);
		});
	},

	alterar: function (req, res, cb) {
		var msg = 'Altera Carne';
		var view = 'carnes/alterar';

		var query = {_id:req.params.id};
		var mod = req.body;
		Carne.update(query,mod,function (err, data) {
			cb(err, data, res, view, msg);
		});
	}, 

	deletar: function(req,res,cb){
		var msg = 'deleta Carne';
		var view = 'carnes/deletar';

		var query = {_id:req.params.id};

		Carne.remove(query, function (err,data){
			cb(err, data, res, view, msg);
		});
	},

	listar: function(req, res, cb){
		var msg ='Listagem completa';
		var view ='carnes/listar';
		var query = {};
		Carne.find(query, function(err,data){
			cb(err, data, res, view, msg);
		});
	}
}