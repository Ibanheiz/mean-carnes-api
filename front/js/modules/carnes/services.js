/**
* Services para controle do módulo de Carnes
**/

(function(angular){
	angular.module('churras.modules.Carnes.services', []).
		service('CarneService', ['$http',
			function ($http) {
				var urlBase = 'api/carnes';

				this.listar = function() {
					return $http.get(urlBase);
				};
			}
		]);
})(angular);