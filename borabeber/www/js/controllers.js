angular.module('app.controllers', [])

.controller('ofertasCtrl', function($scope, ServicoOferta) {

  $scope.listaPromocoes = ServicoOferta.listaOfertas();
})

.controller('comercianteCtrl', function($scope) {

})

.controller('mapaCtrl', function($scope) {

})
