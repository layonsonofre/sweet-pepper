(function() {
  'use strict';

  angular
    .module('Checkout', [])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/checkout', {
          templateUrl: 'app/partials/checkout.html',
          controller: 'CheckoutController',
          controllerAs: 'vm'
        })
    }])
    .controller('CheckoutController', CheckoutController);

  CheckoutController.$inject = ['$rootScope', '$location'];

  function CheckoutController($rootScope, $location) {
    var vm = this;
    vm.goHome = goHome;

    function goHome() {
      $location.path('/home');
    }
  }
})()
