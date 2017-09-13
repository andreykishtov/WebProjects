(function() {
    "use strict";

    // Usage:
    //
    // Creates:
    //

    angular.module("lanser").component("register", {
        templateUrl: "/components/register/register.html",
        controller: ControllerController,
        controllerAs: "vm",
        bindings: {}
    });

    ControllerController.$inject = ["$rootScope", "registerService"];

    function ControllerController($rootScope, registerService) {
        let vm = this;
        vm.locations = "";

        registerService.getLocations().then(function(response) {
            vm.locations = response.data;
        });
    }
})();
