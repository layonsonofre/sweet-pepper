(function() {
  'use strict';

  angular
    .module('dataStorageService', [])
    .service('dataStorage', dataStorage);

  dataStorage.$inject = ['$window', '$rootScope'];

  function dataStorage($window, $rootScope) {
    var dataStorage = {};

    dataStorage.cleanUp = cleanUp;

    dataStorage.addItem = addItem;
    dataStorage.getItems = getItems;
    dataStorage.addToCart = addToCart;
    dataStorage.getCartItems = getCartItems;

    return dataStorage;

    function cleanUp() {
      $window.localStorage.items = null;
      $window.localStorage.cart = null;
    }

    function addItem(entry) {
      $window.localStorage.items = JSON.stringify(entry);
    }

    function getItems() {
      try {
        return JSON.parse($window.localStorage.items);
      } catch(e) {
        return null;
      }
    }

    function addToCart(entry) {
      $window.localStorage.cart = JSON.stringify(entry);
    }

    function getCartItems() {
      try {
        return JSON.parse($window.localStorage.cart);
      } catch(e) {
        return null;
      }
    }
  }
})()
