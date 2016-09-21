(function () {
    "use strict";

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.check = function () {

            var string = document.getElementById("lunch-menu").value;
            if (string.length ==0) {
                $scope.message = "Please enter data first";
            }
            else if (string.length !==0) {
                var itemLength = string.split(','||' ').length;
                if (itemLength <= 3) {
                    $scope.message = "Enjoy!";
                }
                else if (itemLength > 3) {
                    $scope.message = "Too much!";
                }
            }
        }
    }
})();