(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('lanser')
        .component('jobUpdate', {
            // template:'htmlTemplate',
            templateUrl: '/components/job-description/job-update/job-update.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                // buttonName: '<'
            },
        });

    // ControllerController.$inject = ['dependency1'];
    function ControllerController() {
        var vm = this;
        // vm.buttonName="click"

        ////////////////

    }
})();