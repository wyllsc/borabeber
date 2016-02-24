angular.module('app.controllers', [])

  .controller('OfertasCtrl', function ($scope, OfertaFactory, $ionicSlideBoxDelegate, $cordovaSocialSharing) {

    //Slide Banner
    $scope.navSlide = function (index) {
      $ionicSlideBoxDelegate.slide(index, 500);
    };

    // Busca Ofertas
    $scope.listaPromocoes = OfertaFactory.listaOfertas();

    // Compartilhar
    $scope.compartilhar = function () {
      $cordovaSocialSharing.share("App para buscar sua bebida mais próxima e mais barata!", "Bora Beber?", "http://sd.keepcalm-o-matic.co.uk/i/keep-calm-and-vamo-ou-bora-beber-2.png", "http://www.borabeber.com");
      console.log("chamando o compartilhar");
    }


  })

  .controller('ComercianteCtrl', function ($scope) {

  })

  .controller('MapaCtrl', function ($scope) {

    angular.extend($scope, {
      brasilia: {
        lat: -15.814216,
        lng: -48.093091,
        zoom: 4
      }
    });

  })
