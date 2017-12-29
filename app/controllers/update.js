(function() {
  'use strict';

  angular
    .module('Update', [])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/update', {
          templateUrl: 'app/partials/update.html',
          controller: 'UpdateController',
          controllerAs: 'vm'
        })
    }])
    .controller('UpdateController', UpdateController);

  UpdateController.$inject = ['$rootScope', 'dataStorage', '$location'];

  function UpdateController($rootScope, dataStorage, $location) {
    var vm = this;
    vm.form = {};
    vm.submit = submit;

    function submit() {
      console.log(vm.form);
    }

    function goBack() {
      $window.history.back();
    }
  }
})()
