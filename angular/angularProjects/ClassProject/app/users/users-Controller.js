(function() {
    'use strict';

    angular
        .module('googleMaps')
        .controller('usersController', usersController);

    usersController.$inject = ['usersFactory'];

    function usersController(usersFactory) {

        this.users = usersFactory.getUsers();
        this.username = { username: '', password: '' };
        this.checkLogin = usersFactory.CheckLogin;
    }
})();