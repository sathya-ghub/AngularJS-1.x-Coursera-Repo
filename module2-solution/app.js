(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var buy = this;

        buy.items = ShoppingListCheckOffService.getBuyItems();

        buy.remove = function (itemIndex) {
            ShoppingListCheckOffService.switchItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuy = [
            { name: 'apples', quantity: 10 },
            { name: 'bananas', quantity: 5 },
            { name: 'strawberries', quantity: 5 },
            { name: 'cranberries', quantity: 5 },
            { name: 'oranges', quantity: 10 }
        ];

        var bought=[];

        service.getBuyItems = function () {
            return toBuy;
        };

        service.getBoughtItems = function () {
            return bought;
        };

        service.switchItem = function (itemIndex) {
            var item = toBuy.splice(itemIndex, 1);
            bought.push(item[0]);
        }
    }
})();