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
            loginService(afterLoginCheck, vm.email, vm.password);
        };

        function afterLoginCheck(responce) {
            console.log(responce);
            if (vm.email === "111" && vm.password === "222") {
                $rootScope._currentUser = { user: 1, nam: "bob" };
                localStorageService.set("token", "shit");
                $state.go("home");
            }
        }
    }
})();
