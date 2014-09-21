(function(angular){
'use strict';

// Helpers
var _carnes = {

  cbFindSuccess: function (data, $scope) {
      $scope.carnes = data.data;
      $scope.message = 'List complete';
      console.log(data);
  },
  cbFindError: function (error, $scope) {
      $scope.status = 'Unable to load carnes: ' + error.message;
  }
};
// Controllers 
angular.module('churras.modules.Carnes.controllers', []).
  controller('AppController', 
    ['$scope', '$http',
    function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }]).
  controller('CarnesListarController', 
    ['$scope', '$http', 'CarneService', 
    function ($scope, $http, CarneService) {

      var Carnes = CarneService;
      Carne.find().then(function(data){
        _carnes.cbFindSuccess(data, $scope);
      }, function(err){
        _carnes.cbFindError(err, $scope);
      });

  }]);
})

(angular);
