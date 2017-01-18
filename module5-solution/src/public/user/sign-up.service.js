(function () {
    "use strict";

    angular.module('public')
        .service('SignUpService', SignUpService);

    SignUpService.$inject = ['$http', 'ApiPath'];

    function SignUpService($http, ApiPath) {
        var service = this;

        //An object that stores the user's information
        service.user = [];

        // service to fetch the menu_item for the short name entered
        service.getItemForShortName = function (shortName) {

            return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(function (response) {
                return response;
            }, function error(response) {
                return response;
            });
        };

        // service to check if a user's information has been previously saved
        service.userExists = function(){
            return (service.user.length?true:false);
        }

        // service to submit user details
        service.submitUser = function (userDetails) {
            service.user.push(userDetails);
        };

        // service to fetch user details for info page
        service.getUserDetails = function(){
            return service.user;
        };
    }
})();