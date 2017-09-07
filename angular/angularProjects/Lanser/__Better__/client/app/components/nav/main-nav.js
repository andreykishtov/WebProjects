(function() {
    "use strict";

    angular.module("lanser").component("mainNav", component());

    function component() {
        function componentController(localStorageService, $state, $rootScope, $location, $scope) {
            var vm = this;
            vm.title = "nav";
            vm.loginHead = true;
            vm.loginHeader = null;
            vm.logout = function() {
                localStorageService.clearAll();
                // $rootScope._currentUser = null
                $state.go("login");
            };
            $scope.$watch("loginHeader", function(newValue, oldValue) {
                vm.loginHead = false;
            });

            init();

            function init() {
                let login = localStorageService.get("userId");
                if (login) {
                    vm.loginHeader = login.first_name + " " + login.last_name;
                }
            }
        }

        return {
            bindings: {},
            controller: [
                "localStorageService",
                "$state",
                "$rootScope",
                "$location",
                "$scope",
                componentController
            ],
            controllerAs: "vm",
            templateUrl: "/components/nav/main-nav.html"
        };
    }
})();
