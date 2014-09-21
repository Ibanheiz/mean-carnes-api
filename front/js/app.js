(function(angular){
 
   angular.module('myApp', [
    'myApp.controllers',
    'myApp.filters',
    'myApp.services',
    'myApp.directives'
    ]).
  config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
    when('/carnes', {
      templateUrl: 'expose/carnes/listar',
      controller: 'CarnesListarController'
    }).
    when('/carnes/inserir', {
      templateUrl: 'expose/carnes/inserir',
      controller: 'CarnesInserirController'
    }).
    when('/carnes/:id', {
      templateUrl: 'expose/carnes/exibir',
      controller: 'CarnesExibirController'
    }).
    when('/carnes/:id/editar', {
      templateUrl: 'expose/carnes/editar',
      controller: 'CarnesEditarController'
    }).
    when('/carnes/:id/excluir', {
      templateUrl: 'expose/carnes/excluir',
      controller: 'CarnesExcluirController'
    }).
    otherwise({
      redirectTo: '/carnes'
    });
    $locationProvider.html5Mode(true);
  }]);
})

(angular);
