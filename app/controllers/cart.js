(function() {
  'use strict';

  angular
    .module('Cart', [])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/cart', {
          templateUrl: 'app/partials/cart.html',
          controller: 'CartController',
          controllerAs: 'vm'
        })
    }])
    .controller('CartController', CartController);

  CartController.$inject = ['$window', '$rootScope', 'dataStorage', '$location'];

  function CartController($window, $rootScope, dataStorage, $location) {
    var vm = this;

    vm.cart = dataStorage.getCartItems();

    vm.delete = deleteItem;
    vm.decrease = decrease;
    vm.goBack = goBack;
    vm.goHome = goHome;
    vm.goToCheckout = goToCheckout;
    vm.getCartTotal = getCartTotal;
    vm.getCartTotal();

    function deleteItem(item) {
      item.quantity = 1;
      vm.decrease(item, true);
    }

    function decrease(item, remove) {
      const temp = vm.cart;
      if (remove) {
        item.quantity -= 1;

        if (item.quantity === 0) {
          const name = item.item.name.toLowerCase();
          const arr = vm.cart;
          for (var i = 0; i < arr.length; i++) {
            if (arr[i].item.name.toLowerCase().indexOf(name) > -1) {
              vm.cart.splice(i, 1);
            }
          }
        }
      } else {
        item.quantity += 1;
      }
      dataStorage.addToCart(temp);
      vm.getCartTotal();
    }

    function getCartTotal() {
      vm.cartTotal = 0;
      for (var i = 0; i < vm.cart.length; i++) {
        vm.cartTotal += (vm.cart[i].item.price * vm.cart[i].quantity);
      }
    }

    function goBack() {
      $window.history.back();
    }

    function goHome() {
      $location.path('/home');
    }

    function goToCheckout() {
      $location.path('/checkout');
    }
  }
})()
