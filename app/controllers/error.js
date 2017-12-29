(function() {
  'use strict';

  angular
    .module('Error', [])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/error', {
          templateUrl: 'app/partials/error.html',
          controller: 'ErrorController',
          controllerAs: 'vm'
        })
    }])
    .controller('ErrorController', ErrorController);

  ErrorController.$inject = ['$rootScope', '$location'];

  function ErrorController($rootScope, $location) {
    var vm = this;
    vm.goHome = goHome;

    function goHome() {
      $location.path('/home');
    }
  }
})()
