(function() {
  'use strict';

  angular
    .module('List', [])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/list', {
          templateUrl: 'app/partials/list.html',
          controller: 'ListController',
          controllerAs: 'vm'
        })
    }])
    .controller('ListController', ListController);

  ListController.$inject = ['$window', '$rootScope', 'dataStorage', '$location'];

  function ListController($window, $rootScope, dataStorage, $location) {
    var vm = this;

    vm.items = dataStorage.getItems();

    vm.delete = deleteItem;
    vm.edit = editItem;
    vm.goToUpdate = goToUpdate;
    vm.goBack = goBack;

    function deleteItem(item) {
      const name = item.toLowerCase();
      const arr = vm.items;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase().indexOf(name) > -1) {
          vm.items.splice(i, 1);
        }
      }
      dataStorage.addItem(vm.items);
    }

    function editItem(item) {
      dataStorage.setTempItem(item);
      $location.path('/update');
    }

    function goBack() {
      $window.history.back();
    }

    function goToUpdate() {
      $location.path('/update');
    }
  }
})()
