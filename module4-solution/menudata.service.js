(function () {
  'use strict';

  //Fetch the categories from the restaurant api
  angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('CategoriesPath', "https://davids-restaurant.herokuapp.com/categories.json")
    .constant('ItemPath', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

  MenuDataService.$inject = ['$http', 'CategoriesPath', 'ItemPath'];

  function MenuDataService($http, CategoriesPath, ItemPath) {

    var service = this;

    service.getAllCategories = function () {
      // store the categories returned in this object
      var categories = [];

      return $http({
        method: 'GET',
        url: CategoriesPath
      })
        .then(function success(response) {
          angular.forEach(response.data, function (category) {
            this.push(category);
          }, categories);

          return categories;
        });
    };

    service.getItemsForCategory = function (categoryShortName) {
      //store the items for clicked category in this object
      var categoryItems = [];
      var completeUrl = ItemPath+categoryShortName;

      return $http({
        method: 'GET',
        url: completeUrl
      })
        .then(function success(response) {
          angular.forEach(response.data, function (item) {
            this.push(item);
          }, categoryItems);
          
          return categoryItems[0];
        });
    };
  }

})();
