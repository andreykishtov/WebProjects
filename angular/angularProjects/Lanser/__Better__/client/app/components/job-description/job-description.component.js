(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('jobDescription', {
        templateUrl: '/components/job-description/job-description.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {
            jobId: '<',
            show: '<',
            clickFunc: '&'
        }
    });

    ControllerController.$inject = ['$scope', 'jobService'];
    function ControllerController($scope, jobService) {
        var vm = this;
        $scope.$watch('vm.show', function() {
            if (vm.show) {
                if (!vm.jobId) {
                    return;
                }
                vm.job = jobService.findJob(vm.jobId);
                vm.job.publishedDate = new Date(vm.job.publishedDate).toDateString();
            }
        });

        vm.clicked = function(param) {
            vm.buttonClicked = !vm.buttonClicked;
        };
        ////////////////
    }
})();
