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
            jobId: '<'
        }
    });

    ControllerController.$inject = ['jobService'];
    function ControllerController(jobService) {
        var vm = this;
        console.log(jobId);
        // jobService.findJobFromServer(jobId).then(function(data) {
        //     console.log(jobId);
        //     vm.persons = data.data;
        //     console.log(data);
        // });
        ////////////////
    }
})();
