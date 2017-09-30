(function() {
    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('jobDescription', {
        templateUrl: '/components/job/job-description/job-description.html',
        controller: jobDescriptionController,
        controllerAs: 'vm',
        bindings: {
            jobId: '<',
            show: '<',
            clickFunc: '&',
            buttonName: '<',
            jobUpdate: '<',
            publishName: '<'
        }
    });

    jobDescriptionController.$inject = ['$scope', 'jobService'];

    function jobDescriptionController($scope, jobService) {
        const vm = this;
        $scope.$watch('vm.show', () => {
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
        // //////////////
    }
})();
