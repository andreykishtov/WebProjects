(function() {
    'use strict';
    angular.module('lanser', ['ui.router'])

    .config(function($stateProvider) {
        var home = {
            name: 'home',
            url: '/',
            template: '<jobs-list></jobs-list>'
        }

        var login = {
            name: 'login',
            url: '/login',
            template: '<login></login>'
        }

        var profile = {
            name: 'profile',
            url: '/profile',
            template: '<profile></profile>'
        }

        $stateProvider.state(home);
        $stateProvider.state(login);
    });


})();