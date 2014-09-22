//importando a conexão do banco
require('./config/conexao');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./modules/main/routes');
var expose = require('./modules/expose/index');

var app = express();

var api = {};
api.carnes = require('./modules/carnes/api/routes');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/modules'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../front')));

app.use('/', routes);
app.use('/expose', expose);
app.use('/api/carnes',api.carnes);

// redirect all others to the index (HTML5 history)
app.get('*', function(req, res, next) {
  res.render('main/views/index');
});

module.exports = app;
