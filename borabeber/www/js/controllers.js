angular.module('app.controllers', [])

.controller('OfertasCtrl', function($scope, OfertaFactory) {
  $scope.listaPromocoes = OfertaFactory.listaOfertas();
})

.controller('comercianteCtrl', function($scope) {

})

.controller('mapaCtrl', function($scope) {

})
