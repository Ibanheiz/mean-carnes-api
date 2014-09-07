var Carne = require('../model');
var http = require('http');
var mensagem ='';

module.exports={
	listar:function(req,res,cb){
		var msg ='Listagem completa';
		var view ='carnes/listar';
		var query = {};
		Carne.find(query, function(err,data){
			cb(err, data, res, view, msg);
		});
	}
}