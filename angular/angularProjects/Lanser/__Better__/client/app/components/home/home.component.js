(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('home', {
        templateUrl: '/components/home/home.html',
        controller: ControllerController,
        controllerAs: 'vm'
    });

    ControllerController.$inject = ['jobService', 'localStorageService', '$scope'];
    function ControllerController(jobService, localStorageService, $scope) {
        // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        var vm = this;
        vm.searchSkill=[];
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
            vm.listormap === 'Show Map' ? (vm.listormap = 'Show List') : (vm.listormap = 'Show On Map');
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
                let message = ['Thank you For Applying For The Job', 'You Have allReady Applied To the Job'];
                console.log(data.data.nModified);
                data.data.nModified ? (vm.applyMessage = message[0]) : (vm.applyMessage = message[1]);
            });
        }
    }
})();
