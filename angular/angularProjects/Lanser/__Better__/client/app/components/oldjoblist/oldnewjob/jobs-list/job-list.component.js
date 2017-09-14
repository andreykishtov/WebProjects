(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('jobList', {
        templateUrl: '/components/jobs-list/job-list.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {
            // Binding: '='
        }
    });

    ControllerController.$inject = ['$rootScope', 'localStorageService', 'jobListService'];
    function ControllerController($rootScope, localStorageService, jobListService) {
        var vm = this;
        vm.applyToJob = applyToJob;
        vm.disabled = false;
        vm.clicked = '';
        activate();

        ////////////////

        function activate() {
            return jobListService.getJobs().then(data => {
                vm.jobsObj = data.data;
                vm.titles = Object.keys(vm.jobsObj[0], 1);
            });
        }
    }
})();
