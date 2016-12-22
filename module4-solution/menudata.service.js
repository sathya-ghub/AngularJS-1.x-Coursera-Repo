(function () {
  'use strict';

  //Fetch the categories from the restaurant api
  angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('CategoriesPath', "https://davids-restaurant.herokuapp.com/categories.json")
    .constant('ItemPath', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

  MenuDataService.$inject = ['$http','CategoriesPath','ItemPath'];
  
  function MenuDataService() {

    var service = this;

    service.getAllCategories = function () {
      //store the categories returned in this object
      var categories = [];
      return $http({
        method: 'GET',
        url: CategoriesPath
      }).then(function success(response) {
        angular.forEach(response.data, function (category) {
          this.push(category.name);
        }, categories);
        console.log(categories);
        return categories;
      });
    };
  }
})();
