(function(){
"use strict";

angular.module('LunchBreak',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    
    $scope.message = "You entered : " + $scope.names;
    // $scope.check = function(names){
    //     var itemLength = names.split(',').length;
    //     return itemLength;
    // };
}
})();