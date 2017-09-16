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

    ControllerController.$inject = ['localStorageService', 'jobService'];
    function ControllerController(localStorageService, jobService) {
        var vm = this;
        vm.showDescription = showDescription;
        vm.applyToJob = applyToJob;
        vm.buttonClicked = false;
        vm.description = false;
        ////////////////

        function showDescription() {
            vm.description = !vm.description;
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
