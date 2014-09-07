///
// Arquivo do objeto Carne
///

// Importa a dependência do mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Cria o Schema da coleção Carne
// OBS: Atribui os defaults dos atributos como vazio ('') 
// para o MongoDb não ter a necessidade de recriar o objeto
// para alocar valor ao campo, o que trás ganho de performance
var CarneSchema = new Schema({
	tipo: {type: String, default: '', require: true},
	categoria: {type: String, default: '', require: true},
	peso: {type: Number, min: 0, require: true},
	preco: {type: Number, min: 0, require: true},
	data: { type: Date, default: Date.now }
});

var Carne = module.exports = mongoose.model('Carne', CarneSchema);
