(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")

    function FoundItemsDirective() {

        var ddo = {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            transclude: true,
            scope: {
                foundItems: '<',
                onRemove: '&',
                search: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'items',
            bindToController: true,
            link: FoundItemsDirectiveLink
        };
        return ddo;
    }

    function FoundItemsDirectiveLink(scope, element, attrs, controller) {
        
        scope.$watch('items.checkSearch()', function (newValue) {
            if (newValue === true) {
                displayWarningMessage();
            }
            else {
                removeWarningMessage();
            }
        });

        function displayWarningMessage() {
            var warningElem = element.find("div.error");
            warningElem.slideDown(1000);
        }

        function removeWarningMessage() {
            var warningElem = element.find("div.error");
            warningElem.slideUp(1000);
        }
    }

    function FoundItemsDirectiveController() {
        var items = this;
    
        items.checkSearch = function () {
            if (items.search() === false||items.foundItems.length==0) {
                return true;
            }
        }
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {

        var narrowCtrl = this;
        narrowCtrl.found = [];
        narrowCtrl.findMatchingItems = function (searchTerm) {

            narrowCtrl.searchValidity(searchTerm);

            narrowCtrl.found = [];
            MenuSearchService.getMatchedMenuItems(searchTerm)
                .then(function (matchedItems) {
                    angular.forEach(matchedItems, function (foodItem) {
                        this.push(foodItem);
                    }, narrowCtrl.found);
                    return narrowCtrl.found;
                })
        }

        narrowCtrl.searchValidity = function (searchTerm) {
            if (searchTerm == undefined || searchTerm.length == 0) {
                return false;
            }
        }

        narrowCtrl.removeItem = function (itemIndex) {
            narrowCtrl.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (search) {
            var matchedItems = [];
            return $http({
                method: 'GET',
                url: ApiBasePath
            }).then(function success(response) {
                angular.forEach(response.data.menu_items, function (foodItem) {
                    if (foodItem.description.indexOf(search) !== -1) {
                        this.push(foodItem);
                    }
                }, matchedItems)
                return matchedItems;
            });
        }
    }
})();
