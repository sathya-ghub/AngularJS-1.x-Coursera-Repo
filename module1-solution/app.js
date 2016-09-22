(function () {
    "use strict";

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.check = function () {

            var string = $scope.items;
            if (string.length == 0) {
                $scope.message = "Please enter data first";
            }
            else if (string.length) {
                var itemLength = string.split(',').length;
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