angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('atRiskInstructions', {
    url: '/page23',
    templateUrl: 'templates/atRiskInstructions.html',
    controller: 'atRiskInstructionsCtrl'
  })

  .state('servicesList', {
    url: '/page2',
    templateUrl: 'templates/servicesList.html',
    controller: 'servicesListCtrl'
  })

  .state('policeDepartments', {
    url: '/page6',
    templateUrl: 'templates/policeDepartments.html',
    controller: 'policeDepartmentsCtrl'
  })

  .state('salvationArmy', {
    url: '/page7',
    templateUrl: 'templates/salvationArmy.html',
    controller: 'salvationArmyCtrl'
  })

  .state('alcoholicsAnonymous', {
    url: '/page8',
    templateUrl: 'templates/alcoholicsAnonymous.html',
    controller: 'alcoholicsAnonymousCtrl'
  })

  .state('foodPantries', {
    url: '/page9',
    templateUrl: 'templates/foodPantries.html',
    controller: 'foodPantriesCtrl'
  })

  .state('domesticViolenceServices', {
    url: '/page10',
    templateUrl: 'templates/domesticViolenceServices.html',
    controller: 'domesticViolenceServicesCtrl'
  })

  .state('homelessShelters', {
    url: '/page11',
    templateUrl: 'templates/homelessShelters.html',
    controller: 'homelessSheltersCtrl'
  })

  .state('hospitals', {
    url: '/page12',
    templateUrl: 'templates/hospitals.html',
    controller: 'hospitalsCtrl'
  })

  .state('womensShelters', {
    url: '/page13',
    templateUrl: 'templates/womensShelters.html',
    controller: 'womensSheltersCtrl'
  })

  .state('poisonControl', {
    url: '/page14',
    templateUrl: 'templates/poisonControl.html',
    controller: 'poisonControlCtrl'
  })

  .state('socialSecurityOffices', {
    url: '/page15',
    templateUrl: 'templates/socialSecurityOffices.html',
    controller: 'socialSecurityOfficesCtrl'
  })

  .state('yMCA', {
    url: '/page16',
    templateUrl: 'templates/yMCA.html',
    controller: 'yMCACtrl'
  })

  .state('halfwayHouse', {
    url: '/page17',
    templateUrl: 'templates/halfwayHouse.html',
    controller: 'halfwayHouseCtrl'
  })

  .state('veteransAffairsHospitals', {
    url: '/page18',
    templateUrl: 'templates/veteransAffairsHospitals.html',
    controller: 'veteransAffairsHospitalsCtrl'
  })

  .state('fireDepartments', {
    url: '/page19',
    templateUrl: 'templates/fireDepartments.html',
    controller: 'fireDepartmentsCtrl'
  })

  .state('freeClinics', {
    url: '/page20',
    templateUrl: 'templates/freeClinics.html',
    controller: 'freeClinicsCtrl'
  })

  .state('deptOfMotorVehicles', {
    url: '/page22',
    templateUrl: 'templates/deptOfMotorVehicles.html',
    controller: 'deptOfMotorVehiclesCtrl'
  })

$urlRouterProvider.otherwise('/page23')


});