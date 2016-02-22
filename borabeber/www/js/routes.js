angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
    .state('menu', {
      url: '/menu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('menu.ofertas', {
      url: '/ofertas',
      views: {
        'side-menu23': {
          templateUrl: 'templates/ofertas.html'
        }
      }
    })
        
      
    
      
        
    .state('comerciante', {
      url: '/comerciante',
      templateUrl: 'templates/comerciante.html'
    })
        
      
    
      
        
    .state('menu.mapa', {
      url: '/mapa',
      views: {
        'side-menu23': {
          templateUrl: 'templates/mapa.html'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/menu/ofertas');
  

  

});