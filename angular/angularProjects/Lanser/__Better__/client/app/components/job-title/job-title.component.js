(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('jobTitle', {
        templateUrl: '/components/job-title/job-title.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {
            titles: '<',
            clickedTitle: '&'
        }
    });

    // ControllerController.$inject = [''];
    function ControllerController() {
        var vm = this;

        ////////////////
    }
})();
