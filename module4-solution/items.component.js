(function () {
    'use strict';

    angular.module('data')
        .component('item', {
            url: 'templates/items-details.template.html',
            bindings: {
                items: '<'
            }
        })
})();