(function () {
    'use strict';

    angular.module('data')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];

    function ItemsController(items) {
        var itemList = this;

        itemList.names = [];
        
        for(var i = 0;i<items.length;i++){
            itemList.names.push(items[i].name);
        }
    }
})();