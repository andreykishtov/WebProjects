(function() {
    'use strict';

    angular.module('lanser').component('mainNav', component());

    function component() {
        function componentController(localStorageService, $state, $rootScope, $location, $scope) {
            var vm = this;
            vm.title = 'nav';
            //vm.loginHead = true;
            vm.loginHeader = null;
            vm.logout = logout;

            $scope.$on('userIsLoggedIn', function() {
                init();
            });

            init();

            /////////////////////
            function init() {
                let login = localStorageService.get('userId');
                vm.loginHeader = login ? `Hello ${login.name} you are logged in` : '';
                vm.loggedIn = login ? true : false;
            }

            function logout() {
                localStorageService.clearAll();
                init();
                // $rootScope._currentUser = null
                $state.go('login');
            }
        }

        return {
            bindings: {},
            controller: [
                'localStorageService',
                '$state',
                '$rootScope',
                '$location',
                '$scope',
                componentController
            ],
            controllerAs: 'vm',
            templateUrl: '/components/nav/main-nav.html'
        };
    }
})();
