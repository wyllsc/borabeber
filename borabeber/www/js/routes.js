angular.module('app.routes', []).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('menu', {
      url: '/menu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })

    .state('menu.ofertas', {
      url: '/ofertas',
      views: {
        'menu-usuario': {
          templateUrl: 'templates/ofertas.html',
          controller: 'OfertasCtrl'
        }
      }
    })

    .state('menu.comerciante', {
      url: '/comerciante',
      views: {
        'menu-usuario': {
          templateUrl: 'templates/comerciante.html'
        }
      }
    })

    .state('menu.mapa', {
      url: '/mapa',
      views: {
        'menu-usuario': {
          templateUrl: 'templates/mapa.html'
        }
      }
    })
    ;

  $urlRouterProvider.otherwise('/menu/ofertas');

});
