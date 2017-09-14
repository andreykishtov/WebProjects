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
            clickFunc: '&'
        }
    });

    // ControllerController.$inject = ['dependency1'];
    function ControllerController() {
        var vm = this;
        vm.showDescription = showDescription;
        vm.buttonClicked = false;
        vm.clicked = clicked;
        vm.description = false;
        ////////////////

        function clicked(param) {
            vm.buttonClicked = !vm.buttonClicked;
        }

        function showDescription() {
            vm.description = !vm.description;
        }
    }
})();
