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

    ControllerController.$inject = ['localStorageService', 'myApplicantService'];
    function ControllerController(localStorageService, myApplicantService) {
        var vm = this;

        activate();
        ////////////////

        function activate() {
            let login = localStorageService.get('userId');
            myApplicantService.getMyApplications(login.id).then(function() {
                vm.jobs = myApplicantService.jobs;
                if (vm.jobs) {
                    vm.titles = Object.keys(vm.jobs[0], 1);
                }
            });
        }

        vm.change = function() {
            vm.jobDescription = !vm.jobDescription;
        };

        function removeJob(job_id) {
            //let user = localStorageService.get('userId');
            // if (!user) {
            //     $log.log('no user');
            //     return $state.go('login');
            // }

            jobService.deleteJob(job_id).then(data => {
           
                ///
                
            });
        }
    }
})();
