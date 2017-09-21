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
        bindings: {
            // Binding: '=',
        }
    });

    // ControllerController.$inject = ['dependency1'];
    function ControllerController() {
        var vm = this;
        vm.jobAdded='false';

        ////////////////

        vm.$onInit = function() {};
        vm.$onChanges = function(changesObj) {};
        vm.$onDestroy = function() {};
    }
})();
