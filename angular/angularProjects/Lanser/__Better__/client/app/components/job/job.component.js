(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('job', {
        templateUrl: '/components/job/job.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {
            job: '<',
            buttonName: '<',
            clickFunc: '&',
            buttonClicked: '<'
        }
    });

    // ControllerController.$inject = ['dependency1'];
    function ControllerController() {
        var vm = this;
        vm.buttonClicked = false;
        vm.clicked = function() {
            vm.buttonClicked = !vm.buttonClicked;
        };
        // vm.disable = false;
        ////////////////
    }
})();
