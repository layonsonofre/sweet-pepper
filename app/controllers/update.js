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

  UpdateController.$inject = ['$window', '$rootScope', 'dataStorage', '$location', 'ngToast'];

  function UpdateController($window, $rootScope, dataStorage, $location, ngToast) {
    var vm = this;
    vm.tempItem = dataStorage.getTempItem();
    vm.form = {};
    if (vm.tempItem) {
      vm.form.name = vm.tempItem.name;
      vm.form.description = vm.tempItem.description;
      vm.form.imageUrl = vm.tempItem.imageUrl;
      vm.form.price = vm.tempItem.price;
      dataStorage.setTempItem(null);
    }
    vm.submit = submit;
    vm.goBack = goBack;

    function submit() {
      let temp = dataStorage.getItems();
      if (vm.tempItem) {
        const copy = temp;
        for (var i = 0; i < copy.length; i++) {
          if (copy[i].name.toLowerCase().indexOf(vm.tempItem.name.toLowerCase()) > -1) {
            temp[i].name = vm.form.name;
            temp[i].description = vm.form.description;
            temp[i].imageUrl = vm.form.imageUrl;
            temp[i].price = vm.form.price;
            dataStorage.addItem(temp);
            $location.path('/list');
          }
        }
      } else {
        if (!temp || !temp.length) {
          temp = [];
        }
        temp.push(vm.form);
        dataStorage.addItem(temp);
        $location.path('/home');
      }
      ngToast.warning({content: 'Os cupcakes disponíveis foram atualizados!'});
    }

    function goBack() {
      $window.history.back();
    }
  }
})()
