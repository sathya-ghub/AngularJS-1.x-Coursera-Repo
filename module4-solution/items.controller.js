(function(){
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

ItemController.$inject = ['items'];

function ItemsController(items){
    var itemsList = this;
    itemList.items = items;
}

})();