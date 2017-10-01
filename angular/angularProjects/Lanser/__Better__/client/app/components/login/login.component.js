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

    ControllerController.$inject = ['$state', 'userService'];

    function ControllerController($state, userService) {
        var vm = this;
        vm.loggedIn = loggedIn;

        function loggedIn() {
            userService
                .validate(vm.email, vm.password)
                .then(user => (user ? $state.go('home') : alert('User Not Found')));
        }
    }
})();
