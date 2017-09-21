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

    ControllerController.$inject = ['jobService','localStorageService'];
    function ControllerController(jobService,localStorageService) {
        var vm = this;
        vm.clicked = '';
        vm.applyToJob = applyToJob;
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

        function applyToJob(job_id) {
            console.log(job_id);
            let user = localStorageService.get('userId');
            if (!user) {
                $log.log('no user');
                return $state.go('login');
            }

            jobService.applyToJob(job_id, user.id).then(data => {
                if (!data.data.job.nModified) {
                    vm.messageAfterApply ='You Have allReady Applied To the Job';
                    vm.allReadyApplied = 'is-active';
                }else{
                    vm.messageAfterApply ='Thank you For Applying For The Job';
                    vm.allReadyApplied = 'is-active';
                }
            });
        }
    }
})();
