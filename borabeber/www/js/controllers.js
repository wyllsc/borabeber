angular.module('app.controllers', [])

.controller('OfertasCtrl', function($scope, OfertaFactory) {
  $scope.listaPromocoes = OfertaFactory.listaOfertas();
})

.controller('ComercianteCtrl', function($scope) {

})

.controller('MapaCtrl', function($scope) {

})
