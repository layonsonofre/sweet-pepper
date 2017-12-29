(function() {
  'use strict';

  angular
    .module('Home', [])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: 'app/partials/home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        })
    }])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$rootScope', 'dataStorage', '$location'];

  function HomeController($rootScope, dataStorage, $location) {
    var vm = this;
    vm.message = 'testando aqui';
  }
})()
