(function() {
  'use strict';

  angular
    .module('dataStorageService', [])
    .service('dataStorage', dataStorage);

  dataStorage.$inject = ['$window', '$rootScope'];

  function dataStorage($window, $rootScope) {
    var dataStorage = {};
    var counter = 0;

    dataStorage.cleanUp = cleanUp;

    dataStorage.addItem = addItem;
    dataStorage.getItems = getItems;
    dataStorage.addToCart = addToCart;
    dataStorage.getCartItems = getCartItems;
    dataStorage.setTempItem = setTempItem;
    dataStorage.getTempItem = getTempItem;

    dataStorage.getCartCounter = function() {
      return counter;
    };

    return dataStorage;

    function cleanUp() {
      $window.localStorage.items = null;
      $window.localStorage.tempItem = null;
      $window.localStorage.cart = null;
    }

    function addItem(entry) {
      $window.localStorage.items = JSON.stringify(entry);
    }

    function getItems() {
      try {
        return JSON.parse($window.localStorage.items);
      } catch (e) {
        return null;
      }
    }

    function addToCart(entry) {
      $window.localStorage.cart = JSON.stringify(entry);
      if (entry) {
        counter = entry.length;
      } else {
        counter = 0;
      }
    }

    function getCartItems() {
      try {
        return JSON.parse($window.localStorage.cart);
      } catch (e) {
        return null;
      }
    }

    function setTempItem(entry) {
      $window.localStorage.tempItem = JSON.stringify(entry);
    }

    function getTempItem() {
      try {
        return JSON.parse($window.localStorage.tempItem);
      } catch (e) {
        return null;
      }
    }
  }
})()
