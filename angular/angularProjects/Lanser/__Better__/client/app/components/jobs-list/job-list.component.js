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

    ControllerController.$inject = ['localStorageService', 'jobListService'];
    function ControllerController(localStorageService, jobListService) {
        var vm = this;
        vm.applyToJob = applyToJob;
        vm.disabled = false;
        activate();

        ////////////////

        function activate() {
            return jobListService.getJobs().then(data => {
                vm.jobsObj = data.data;
                vm.titles = Object.keys(vm.jobsObj[0], 1);
            });
        }

        function applyToJob(job_id, applicant_id) {
            let user = localStorageService.get('userId');
            if (!user) {
                $log.log('no user');
                return $state.go('login');
            }
            jobListService.applyToJob(job_id, applicant_id).then(data => {
                //vm.applied = data.data;
                if (!data.data.job.nModified) {
                    alert('All ready Applied'); //change to div
                }
            });
        }
    }
})();
