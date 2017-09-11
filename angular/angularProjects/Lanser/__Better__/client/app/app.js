(function() {
    "use strict";
    angular
        .module("lanser", ["ui.router", "LocalStorageModule"])
        .config(function($stateProvider) {
            var home = {
                name: "home",
                url: "/",
                template: "<jobs-list></jobs-list>"
            };

            var login = {
                name: "login",
                url: "/login",
                template: "<login></login>"
            };

            var profile = {
                name: "profile",
                url: "/profile",
                template: "<profile></profile>"
            };

            var register = {
                name: "register",
                url: "/register",
                template: "<register></register>"
            };

            var register = {
                name: "my-jobs",
                url: "/myApplications",
                template: "<my-jobs></my-jobs>"
            };

            $stateProvider.state(home);
            $stateProvider.state(login);
            $stateProvider.state(register);
            $stateProvider.state(profile);
        })
        .run([
            "$state",
            function($state) {
                $state.go("home");
            }
        ])
        .constant("API", {
            URL: "http://localhost:7575/api"
        });
    // .controller("mainCtrl", ControllerController);

    // ControllerController.$inject = ["dependency1"];
    // function ControllerController() {
    //     var vm = this;

    //     activate();

    //     ////////////////

    //     function activate() {}
    // }
})();
