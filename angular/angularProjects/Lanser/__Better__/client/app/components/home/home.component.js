(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('lanser')
        .component('home', {
            templateUrl: '/components/home/home.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                // Binding: '='
            }
        })
        .filter('startFrom', Filter);

    function Filter() {
        return FilterFilter;

        ////////////////

        function FilterFilter(input, start) {
            if (!input) {
                return;
            }
            start = +start; //parse to int
            return input.slice(start);
        }
    }

    ControllerController.$inject = ['jobService', 'localStorageService','$scope'];
    function ControllerController(jobService, localStorageService,$scope) {
        // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        var vm = this;
        vm.clicked = '';
        vm.applyToJob = applyToJob;
        activate();
        vm.currentPage = 0;
        vm.pageSize = 10;
        vm.change = change;
        vm.changelistormap = changelistormap;
        vm.listormap = 'Show Map';

        ////////////////
        function changelistormap() {
            vm.showlistormap = !vm.showlistormap;
            vm.listormap === 'Show Map'
                ? (vm.listormap = 'Show List')
                : (vm.listormap = 'Show On Map');
        }

        function change() {
            vm.jobDescription = !vm.jobDescription;
        }

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
                    vm.messageAfterApply = 'You Have allReady Applied To the Job';
                    vm.allReadyApplied = 'is-active';
                } else {
                    vm.messageAfterApply = 'Thank you For Applying For The Job';
                    vm.allReadyApplied = 'is-active';
                }
            });
        }
    }
})();
