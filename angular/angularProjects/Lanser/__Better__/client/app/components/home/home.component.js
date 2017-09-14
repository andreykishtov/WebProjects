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

        function applyToJob(job_id) {
            let user = localStorageService.get('userId');
            if (!user) {
                $log.log('no user');
                return $state.go('login');
            }

            jobService.applyToJob(job_id, user.id).then(data => {
                if (!data.data.job.nModified) {
                    alert('All ready Applied'); //change to div
                }
            });
        }
    }
})();
