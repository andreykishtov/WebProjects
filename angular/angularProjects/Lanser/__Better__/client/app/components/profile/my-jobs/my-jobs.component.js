(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('myJobs', {
        templateUrl: './components/profile/my-jobs/my-jobs.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {
            // jobAdded: '='
        }
    });

    ControllerController.$inject = ['myJobsService', 'localStorageService', '$scope', 'jobService'];
    function ControllerController(myJobsService, localStorageService, $scope, jobService) {
        var vm = this;
        vm.deleteJob = deleteJob;
        vm.change = change;
        activate();
        ////////////////

        $scope.$on('Added Job', (evt, data) => {
            activate();
        });

        function activate() {
            let login = localStorageService.get('userId');
            myJobsService.getMyJobs(login.id).then(answer => {
                if (myJobsService.jobs && myJobsService.jobs.length > 0) {
                    vm.jobs = myJobsService.jobs;
                    vm.titles = Object.keys(vm.jobs[0], 1);
                }
            });
        }

        function change() {
            vm.jobDescription = !vm.jobDescription;
        }

        function deleteJob(id) {
            jobService.deleteJob(id).then(data => {
                vm.messageAfterUnApply = 'Job Deleted';
                activate();
            });
        }
    }
})();
