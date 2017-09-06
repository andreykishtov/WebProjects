(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('lanser')
        .component('profile', {
            templateUrl: '/components/nav/profile.html',
            controller: ControllerController,
            controllerAs: '$ctrl',
            bindings: {
                // Binding: '=',
            },
        });

    // ControllerController.$inject = ['dependency1'];
    function ControllerController() {
        var $ctrl = this;
        

        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };
    }
})();