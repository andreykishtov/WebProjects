(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('login', {
        templateUrl: '/components/login/login.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {}
    });

    ControllerController.$inject = ['$state', 'loginService'];

    function ControllerController($state, loginService) {
        var vm = this;
        vm.loggedIn = loggedIn;

        function loggedIn() {
            loginService.validate(vm.email, vm.password).then(function(user) {
                user ? $state.go('home') : alert('User Not Found');
            });
        }
    }
})();
