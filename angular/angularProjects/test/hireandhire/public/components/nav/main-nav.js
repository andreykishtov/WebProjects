(function () { //d
    'use strict';

    angular.module('hireandhire').component('mainNav', component());

    function component() {
        function componentController(localStorageService, $state, $rootScope, $scope) {
            var vm = this;
            // vm.username = 'Hello ' + localStorageService.get('name');

            // $scope.$watch(function () {
            //     vm.username;
            // });

            vm.logout = function () {
                localStorageService.clearAll();
                vm.username = '';
                $state.go('login');
            }

            vm.checkLoggedIn = function () {
                if (localStorageService.get('userid')) {
                    vm.username = 'Hello ' + localStorageService.get('name');
                } else {
                    vm.username = '';
                }
            }

            function init() {
                vm.checkLoggedIn();
            }

            $scope.$on('userLoggedIn', function () {
                vm.checkLoggedIn();
            });

            init();
        }

        return {
            bindings: {},
            controller: ['localStorageService', '$state', '$rootScope', '$scope', componentController],
            controllerAs: 'vm',
            templateUrl: '/components/nav/main-nav.html'
        };
    }
})();