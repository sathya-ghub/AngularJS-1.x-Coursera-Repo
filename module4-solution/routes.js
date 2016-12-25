(function () {
'use strict';

angular.module('MenuApp')
    .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {
    
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    $stateProvider

    // Home page
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.template.html'
        })

    // Categories page
        .state('categories',{
            url:'/categories',
            templateUrl:'templates/categories.template.html',
            controller:'CategoryController as categoryList',
            resolve: {
                categories:['MenuDataService',
                function(MenuDataService){
                    return MenuDataService.getAllCategories();
                }]
            }
        })
    // Items for the chosen category
        .state('items',{
            url:'/items/{categoryId}',
            templateUrl:'templates/items.template.html',
            controller:'ItemsController as itemList',
            resolve: {
                items:['$stateParams','MenuDataService',
                function($stateParams,MenuDataService){
                    return MenuDataService.getItemsForCategory($stateParams.categoryId);
                }],
            }
        });
    }       
})();