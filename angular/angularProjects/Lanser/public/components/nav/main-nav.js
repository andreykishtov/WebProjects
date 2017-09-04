(function() {
    'use strict';

    angular
        .module('lanser')
        .component('mainNav', component());


    function component() {

        function componentController() {
            var vm = this;
            vm.title = "nav"
            init();

            function init() {

            }
        }

        return {
            bindings: {},
            controller: componentController,
            controllerAs: 'vm',
            templateUrl: '/components/nav/main-nav.html'
        }
    }

}());