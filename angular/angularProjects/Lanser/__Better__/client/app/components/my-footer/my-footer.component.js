(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('myFooter', {
        templateUrl: '/components/my-footer/my-footer.html',
        controller: footerController,
        controllerAs: 'vm'
    });

    // footerController.$inject = ['dependency1'];
    function footerController() {
        var vm = this;

        ////////////////
    }
})();
