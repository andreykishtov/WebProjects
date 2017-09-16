(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('home', {
        templateUrl: '/components/home/home.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {
            // Binding: '='
        }
    });

    ControllerController.$inject = ['jobService'];
    function ControllerController(jobService) {
        var vm = this;
        vm.clicked = '';
        activate();
        vm.change = function() {
            vm.jobDescription = !vm.jobDescription;
        };

        ////////////////

        function activate() {
            jobService.getJobs().then(function() {
                vm.jobs = jobService.jobs;
                vm.titles = Object.keys(vm.jobs[0], 1);
            });
        }
    }
})();
