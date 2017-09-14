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
            show: '<'
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
            }
        });
        ////////////////
    }
})();
