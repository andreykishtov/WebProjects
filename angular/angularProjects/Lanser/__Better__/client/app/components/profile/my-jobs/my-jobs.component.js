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
            jobAdded: '='
        }
    });

    ControllerController.$inject = ['myJobsService', 'localStorageService','$scope'];
    function ControllerController(myJobsService, localStorageService,$scope) {
        var vm = this;

        activate();
        ////////////////

        $scope.$watch('vm.jobAdded', function() {
            activate();
        });

        function activate() {
            let login = localStorageService.get('userId');
            myJobsService.getMyJobs(login.id).then(function() {
                // console.log(myJobsService.jobs[0]._id);
                vm.jobs = myJobsService.jobs;
                if (vm.jobs) {
                    vm.titles = Object.keys(vm.jobs[0], 1);
                }
            });
        }

        vm.change = function() {
            vm.jobDescription = !vm.jobDescription;
        };
    }
})();
