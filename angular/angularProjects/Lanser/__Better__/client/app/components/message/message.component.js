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
             message: '<',
             activate:'='
        }
    });

    // ControllerController.$inject = ['dependency1'];
    function ControllerController() {
        var vm = this;
        //vm.activate = 'is-active';

        ////////////////
    }
})();
