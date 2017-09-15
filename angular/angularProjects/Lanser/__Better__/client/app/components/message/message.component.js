(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('message', {
        templateUrl: './components/message/message.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {
            Binding: '='
        }
    });

    ControllerController.$inject = ['dependency1'];
    function ControllerController(dependency1) {
        var vm = this;

        vm.active = 'is-active';

        ////////////////

        // $ctrl.$onInit = function() {};
        // $ctrl.$onChanges = function(changesObj) {};
        // $ctrl.$onDestroy = function() {};
    }
})();
