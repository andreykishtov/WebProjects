(function() {
    'use strict';
    angular.module('lanser', ['ui.router'])

    .config(function($stateProvider) {
        var home = {
            name: 'home',
            url: '/',
            template: '<jobs-list></jobs-list>'
        }

        var about = {
            name: 'about',
            url: '/about',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        }

        // var jobView = {
        //     name: 'jobView',
        //     url: '/job/:id',
        //     template: '<job-view></job-view>'
        // }

        $stateProvider.state(home);
        $stateProvider.state(about);
    });


})();