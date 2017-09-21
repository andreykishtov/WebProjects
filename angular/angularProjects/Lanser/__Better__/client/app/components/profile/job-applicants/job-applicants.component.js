(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('jobApplicants', {
        templateUrl: './components/profile/job-applicants/job-applicants.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {
            applicantsIdArray: '<'
        }
    });

    ControllerController.$inject = ['userService', '$scope'];
    function ControllerController(userService, $scope) {
        var vm = this;
        $scope.$watch('vm.applicantsIdArray', function() {
            userService.FindUsersByIds(vm.applicantsIdArray).then(function(data) {
                if (data.user.length) {
                    vm.text = 'People That Applied:';
                    vm.persons = data.user;
                }
            });
        });

        ////////////////
    }
})();
