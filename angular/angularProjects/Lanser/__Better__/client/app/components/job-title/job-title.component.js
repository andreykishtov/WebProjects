(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('jobTitle', {
        templateUrl: '/components/job-title/job-title.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {
            titles: '<',
            clicked: '='
        }
    });

    // ControllerController.$inject = ['$event'];
    function ControllerController() {
        var vm = this;
        vm.clickTitle = clickTitle;
        vm.sortBy = sortBy;
        vm.reverse = true;
        // vm.hide = `tile !== '_id'`;

        ////////////////
        function clickTitle(name) {
            vm.clicked = name;
        }

        function sortBy(propertyName) {
            vm.reverse = vm.propertyName === propertyName ? !vm.reverse : false;
            vm.propertyName = propertyName;
        }
    }
})();
