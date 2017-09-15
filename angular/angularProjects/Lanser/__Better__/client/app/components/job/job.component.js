(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('job', {
        templateUrl: '/components/job/job.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {
            job: '<',
            buttonName: '<'
        }
    });

    // ControllerController.$inject = ['dependency1'];
    function ControllerController() {
        var vm = this;
        vm.showDescription = showDescription;
        vm.buttonClicked = false;
        vm.description = false;
        ////////////////

        function showDescription() {
            vm.description = !vm.description;
        }
    }
})();
