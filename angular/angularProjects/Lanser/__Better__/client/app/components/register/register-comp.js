(function() {
    "use strict";

    // Usage:
    //
    // Creates:
    //

    angular.module("lanser").component("register", {
        templateUrl: "/components/login/register.html",
        controller: ControllerController,
        controllerAs: "vm",
        bindings: {}
    });

    ControllerController.$inject = ["$rootScope"];

    function ControllerController($rootScope) {
        var vm = this;
        vm.loggedIn = function() {
            if (vm.email === "111" && vm.password === "222") {
                console.log("222");
                $rootScope.$broadcast("loggedIn");
            }
        };
    }
})();
