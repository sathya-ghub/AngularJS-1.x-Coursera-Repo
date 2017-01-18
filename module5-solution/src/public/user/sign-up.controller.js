(function () {
"use strict";

angular.module('public')
    .controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];

function SignUpController(SignUpService) {

    var signCtrl = this;

    //Two way data binding between the sign up form and controller using the 'user' object
    signCtrl.user = {};

    //Status for submission message
    signCtrl.status = false;

    //Function to check validity of shortName input field which changes on keystroke
    signCtrl.setValidity = function (shortName, form) {

        SignUpService.getItemForShortName(shortName)
            .then(function success(result) {
                return (result.status === 200 ? form.shortName.$setValidity("text", true) : form.shortName.$setValidity("text", false));
            });
    };

    //Submit user details to the service's instance
    signCtrl.submit = function (user) {

        //Check if a user exists in the session
        if (SignUpService.userExists()) {
            signCtrl.status = true;
            signCtrl.message = "You have already signed up";
        }
        else{
            SignUpService.submitUser(user);
            signCtrl.status = true;
            signCtrl.message = "You information has been saved.";
        }
    };
}
})();