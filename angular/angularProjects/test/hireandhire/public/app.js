(function () { //d
    'use strict';

    angular.module('hireandhire', ['ui.router', 'LocalStorageModule']).config(function ($stateProvider) {
            var home = {
                name: 'home',
                url: '/',
                template: '<jobs-list></jobs-list>'
            };

            var login = {
                name: 'login',
                url: '/login',
                template: '<login></login>'
            };

            var profile = {
                name: 'profile',
                url: '/profile',
                template: '<profile></profile>'
            };

            $stateProvider.state(home);
            $stateProvider.state(login);
            $stateProvider.state(profile);

        })
        .run(['$state', function ($state) {
            $state.go('home');
        }])
        .constant('API', {
            'URL': 'http://localhost:3000/api'
        });;
})();