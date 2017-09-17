(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('jobApplicants', {
        templateUrl: './components/profile/my-applicants/my-applicants.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {
            applicantId: '<'
        }
    });

    ControllerController.$inject = ['userService'];
    function ControllerController(userService) {
        var vm = this;
        console.log(jobId);
        userService.findUsers(applicantId).then(function(data) {
            // console.log(jobId);
            vm.persons = data.data;
            // console.log(data);
        });
        ////////////////
    }
})();
