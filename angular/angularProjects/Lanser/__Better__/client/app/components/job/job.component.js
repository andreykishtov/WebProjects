(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('job', {
        templateUrl: '/components/job/job.html',
        controller: jobController,
        controllerAs: 'vm',
        bindings: {
            job: '<',
            buttonName: '<',
            clickFunction:'&',
            jobUpdate: '<',
            publishName:'<'
        }
    });

    // jobController.$inject = ['jobService'];
    function jobController() {
        var vm = this;
        vm.buttonClicked = false;
        vm.description = false;
        vm.showDescription = showDescription;
        ////////////////

        function showDescription() {
            vm.description = !vm.description;
        }
    }
})();
