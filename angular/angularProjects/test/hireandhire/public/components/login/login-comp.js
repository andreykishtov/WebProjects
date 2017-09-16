(function () {
    'use strict';
    angular
        .module('hireandhire').component('login', {
            templateUrl: '/components/login/login.html',
            controller: Controller,
            controllerAs: 'vm',
            bindings: {},
        });

    Controller.$inject = ['$rootScope', '$state', 'localStorageService', 'loginService'];

    function Controller($rootScope, $state, localStorageService, loginService) {
        var vm = this;
        vm.loggedIn = function () {
            loginService.validateUser(vm.email, vm.password)
                .then(function (response) {
                    if (!response.data[0]) {
                        alert("Wrong username or password");
                    } else {
                        localStorageService.set('userid', response.data[0].id);
                        var fullName = response.data[0].first_name + " " + response.data[0].last_name;
                        localStorageService.set('name', fullName);
                        // console.log(localStorageService.get('name'));
                        $state.go('home');
                        $rootScope.$broadcast('userLoggedIn');
                    }
                })
        }
    }

})();