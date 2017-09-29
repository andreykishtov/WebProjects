(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('mainNav', {
        templateUrl: '/components/main-nav/main-nav.html',
        controller: mainNavController,
        controllerAs: 'vm',
        bindings: {}
    });

    mainNavController.$inject = ['localStorageService', '$state', '$rootScope', '$location', '$scope'];
    function mainNavController(localStorageService, $state, $rootScope, $location, $scope) {
        var vm = this;
        vm.title = 'nav';
        vm.loginHeader = null;
        vm.logout = logout;
        vm.makeActive = makeActive;
        
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
            $state.go('login');
        }

        function makeActive(nameOfActive) {
            if (vm.old) {
                vm[vm.old] = '';
            }
            vm[nameOfActive] = 'navClass';
            vm.old = nameOfActive;
        }
    }
})();
