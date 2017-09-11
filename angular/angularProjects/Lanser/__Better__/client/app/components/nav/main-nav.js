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
                init();
                // $rootScope._currentUser = null
                $state.go("login");
            };
            // $scope.$watch("vm.loginHeader", function(newValue, oldValue) {
            //     vm.loginHead = false;
            // });
            $scope.$on("userIsLoggedIn", function() {
                init();
            });
            init();

            function init() {
                let login = localStorageService.get("userId");
                vm.loginHeader = login
                    ? `hello ${login.first_name} ${login.last_name} you Are logged In`
                    : "";
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
