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

  UpdateController.$inject = ['$window', '$rootScope', 'dataStorage', '$location'];

  function UpdateController($window, $rootScope, dataStorage, $location) {
    var vm = this;
    vm.form = {};
    vm.submit = submit;
    vm.goBack = goBack;

    function submit() {
      console.log(vm.form);
      let temp = dataStorage.getItems();
      if (!temp || !temp.length) {
        temp = [];
      }
      temp.push(vm.form);
      dataStorage.addItem(temp);
      console.log(dataStorage.getItems());
      $location.path('/home');
    }

    function goBack() {
      $window.history.back();
    }
  }
})()
