//TODO: Meter redrirección al inicio si hay mascota añadida o no

angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
$stateProvider


.state('menu.addMyPets', {
    url: '/addPet',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addMyPets.html',
        controller: 'addMyPetsCtrl'
      }
    }
  })

  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })
  .state('menu.detailTreatment', {
    url: '/detailTreatment',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detailTreatment.html',
        controller: 'detailTreatmentCtrl'
      }
    }
  })

  .state('menu.addTreatment', {
    url: '/addActuacion',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addTreatment.html',
        controller: 'addTreatmentCtrl'
      }
    }
  })

.state('menu.myPets', {
    url: '/addActuacion',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myPets.html',
        controller: 'myPetsCtrl'
      }
    }
  })
  
  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl',
    abstract:true
  })
  

$urlRouterProvider.otherwise('/side-menu21/home')

  

});