(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('profile', {
        templateUrl: '/components/profile/profile.html',
        controller: ControllerController,
        controllerAs: 'vm',
    });

    // ControllerController.$inject = ['dependency1'];
    function ControllerController() {
        var vm = this;
        vm.jobAdded = 'false';

        ////////////////
    }
})();
