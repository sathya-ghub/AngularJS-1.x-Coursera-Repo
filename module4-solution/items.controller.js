(function () {
    'use strict';

    angular.module('data')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];

    function ItemsController(items) {

        var itemList = this;

        itemList.names = [];

        angular.forEach(items, function (item) {
            this.push(item.name);
        }, itemList.names);
    }
})();