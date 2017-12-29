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
    vm.items = dataStorage.getItems();

    vm.addToCart = addToCart;

    function addToCart(item) {
      let temp = dataStorage.getCartItems();
      const entry = {
        item: item,
        quantity: 1
      };
      if (!temp || !temp.length) {
        temp = [];
        temp.push(entry);
      } else {
        let included = false;
        for (var i = 0; i < temp.length; i++) {
          if (temp[i].item.name.toLowerCase()
          .indexOf(item.name.toLowerCase()) > -1) {
            included = true;
          }
        }
        if (!included) {
          temp.push(entry)
        }
      }
      dataStorage.addToCart(temp);
    }
  }
})()
