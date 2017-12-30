(function() {
  'use strict';

  angular
    .module('Index', [])
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$rootScope', 'dataStorage'];

  function IndexController($rootScope, dataStorage) {
    var vm = this;
    vm.cartCounter = dataStorage.getCartCounter;
  }
})()
