(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('myApp', {
        templateUrl: './components/profile/my-applications/my-app.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {
            // Binding: '='
        }
    });

    ControllerController.$inject = ['localStorageService', 'myApplicantService', 'jobService'];
    function ControllerController(localStorageService, myApplicantService, jobService) {
        var vm = this;
        vm.removeApplication = removeApplication;
        vm.change = change;

        activate();
        ////////////////

        function activate() {
            let login = localStorageService.get('userId');
            myApplicantService.getMyApplications(login.id).then(() => {
                vm.jobs = myApplicantService.jobs;
                if (vm.jobs.length > 0) {
                    vm.titles = Object.keys(vm.jobs[0], 1);
                }
            });
        }

        function change() {
            vm.jobDescription = !vm.jobDescription;
        }

        function removeApplication(job_id) {
            let user = localStorageService.get('userId');
            if (!user) {
                $log.log('no user');
                return $state.go('login');
            }

            jobService.unApply(job_id, user.id).then(data => {
                vm.messageAfterUnApply = 'You Have unApplied To A Job';
                activate();
            });
        }
    }
})();
