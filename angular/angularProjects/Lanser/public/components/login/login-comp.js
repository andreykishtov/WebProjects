(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('lanser')
        .component('login', {
            templateUrl: '/components/login/login.html',
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