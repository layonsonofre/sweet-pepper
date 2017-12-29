(function() {
  'use strict';

  angular
    .module('SweetPepper', [
      'ngRoute', 'Home', 'Update', 'Error', 'dataStorageService'
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
