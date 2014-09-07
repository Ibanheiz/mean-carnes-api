///
// Arquivo de configuração da conexão com o MongoDb
///

// Usando o mongoose odm(Object data model) para ter acesso ao mongodb através do NodeJs
var mongoose = require('mongoose');
// Criando a base de dados para conexão padrão mongodb://servidor/nomebase
mongoose.connect('mongodb://localhos/churras');

var db = mongoose.connection;// atribuindo a current connection

// boas praticas de conexão tratar todos os possiveis eventos da conexão

db.on('error',function(err){
	console.log('Durante a conexão ocooreu o seguinte erro ', err);
});

db.on('open',function(){
	console.log('Conecão aberta');
});

db.on('connected',function(){
	console.log('Estamos conectados');
});

db.on('disconnect',function(err){
	console.log('Você foi desconectado', err);
});

db.on('disconnect',function(err){
	console.log('Você foi desconectado', err);
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Sua aplicação foi encerrada e desconectada');
    process.exit(0);
  });