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

  ErrorController.$inject = ['$rootScope'];

  function ErrorController($rootScope) {
    var vm = this;
    vm.message = 'testando aqui';
  }
})()
