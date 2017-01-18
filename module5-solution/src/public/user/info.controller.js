(function () {
    "use strict";

    angular.module('public')
        .controller('InfoController', InfoController);

    InfoController.$inject = ['userDetails', 'SignUpService'];

    function InfoController(userDetails, SignUpService) {
        var infoCtrl = this;

        //Store details of user
        infoCtrl.userDetails = userDetails;

        //Store details of the item
        infoCtrl.user = [];

        //Fetch the item details for the entered shortName
        if (infoCtrl.userDetails.length) {
            var shortName = infoCtrl.userDetails[0].shortName;

            SignUpService.getItemForShortName(shortName)
                .then(function success(result) {
                    infoCtrl.user.push(result.data);
                });
        }
    }
    
})();