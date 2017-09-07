(function() {
    "use strict";

    // Usage:
    //
    // Creates:
    //

    angular.module("lanser").component("login", {
        templateUrl: "/components/login/login.html",
        controller: ControllerController,
        controllerAs: "vm",
        bindings: {}
    });

    ControllerController.$inject = ["$rootScope", "$state", "localStorageService", "loginService"];

    function ControllerController($rootScope, $state, localStorageService, loginService) {
        var vm = this;
        vm.loggedIn = function() {
            loginService.CheckUser(vm.email, vm.password).then(function(responseFromServer) {
                console.log(responseFromServer.data);
                if (responseFromServer.data.length) {
                    localStorageService.set("userId", responseFromServer.data[0]);
                } else {
                    alert("User Not Found");
                }
            });
        };
    }
})();

//     $rootScope._currentUser = {
//         user: 1,
//         nam: 'bob'
//     }
//
//     $state.go('home');
// } else {
//     alert('Wrong username or password');
// }
