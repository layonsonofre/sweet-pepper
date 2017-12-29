(function() {
  'use strict';

  angular
    .module('SweetPepper', [
      'ngRoute', 'Home', 'Update', 'List', 'Error', 'Cart', 'Checkout',
      'ngToast', 'ui.mask', 'dataStorageService'
    ])
    .config(['$routeProvider', '$locationProvider', 'ngToastProvider',
      function($routeProvider, $locationProvider, ngToastProvider) {
        $locationProvider.html5Mode(false);
        $routeProvider
          .when('/', {
            redirectTo: '/home'
          })
          .otherwise('/error');

        ngToastProvider.configure({
          animation: 'fade'
        , horizontalPosition: 'center'
        , verticalPosition: 'bottom'
        , additionalClasses: 'sweet-alert'
        });
      }
    ])
    .run();
})()
