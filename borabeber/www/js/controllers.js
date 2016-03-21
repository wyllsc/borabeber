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

  .controller('MapaCtrl', function ($scope, $ionicLoading, $cordovaGeolocation) {

    var options = {timeout: 10000, enableHighAccuracy: true};

    $cordovaGeolocation.getCurrentPosition(options).then(function (position) {

      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      var mapOptions = {
        center: latLng,
        zoom: 17,
        disableDefaultUI:true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

      google.maps.event.addListenerOnce($scope.map, 'idle', function(){

        var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latLng
        });

        var infoWindow = new google.maps.InfoWindow({
          content: "Here I am!"
        });

        google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open($scope.map, marker);
        });

      });

    }, function (error) {
      console.log("Could not get location");
    });
  })
