(function(){
'use strict';

angular.module('data')
.component('item',{
    url:'templates/items.template.html',
    bindings:{
        items:'<'
    }
})
})();