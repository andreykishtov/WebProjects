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
        vm.clicked = clicked;

        $scope.$watch('vm.show', () => {
            if (vm.show) {
                if (!vm.jobId) {
                    return;
                }
                vm.job = jobService.findJob(vm.jobId);
                vm.job.publishedDate = new Date(vm.job.publishedDate).toDateString();
            }
        });

        // //////////////

        function clicked() {
            vm.buttonClicked = !vm.buttonClicked;
        }
    }
})();
