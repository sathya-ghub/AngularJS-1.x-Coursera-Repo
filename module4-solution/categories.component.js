(function () {
    'use strict';

    angular.module('data')
        .component('categories', {
            templateUrl: 'templates/category-list.template.html',
            bindings: {
                categories: '<'
            }
        });
})();