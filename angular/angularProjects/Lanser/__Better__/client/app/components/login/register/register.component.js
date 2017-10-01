(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('register', {
        templateUrl: '/components/login/register/register.html',
        controller: registerController,
        controllerAs: 'vm',
        bindings: {}
    });

    registerController.$inject = ['userService'];

    function registerController(userService) {
        let vm = this;
        vm.active = '';
        vm.createUser = createUser;
        vm.showRegister = showRegister;
        vm.newUser = { location: {}, description: {}, name: {} };

        //////////////////

        function showRegister() {
            vm.active = vm.active === '' ? 'is-active' : '';
        }

        function createUser() {
            userService.addUser(vm.newUser).then(data => {
                vm.showRegister();
                vm.messageAfterRegister = 'You Are Registered';
                vm.newUser = { location: {}, description: {}, name: {} };
            });
        }
    }
})();
