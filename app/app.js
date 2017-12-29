(function() {
  'use strict';

  angular
    .module('SweetPepper', [
      'ngRoute', 'Home', 'Update', 'List', 'Error', 'Cart', 'Checkout', 'ui.mask', 'dataStorageService'
    ])
    .config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false);
        $routeProvider
          .when('/', {
            redirectTo: '/home'
          })
          .otherwise('/error');
      }
    ])
    .run();
})()
