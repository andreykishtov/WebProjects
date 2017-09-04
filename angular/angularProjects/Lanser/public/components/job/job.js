(function() {
    'use strict';

    angular
        .module('lanser')
        .component('job', component());

    function component() {



        function componentController() {
            var vm = this;

            init();

            function init() {

            }
        }

        return {
            bindings: {
                jobobj: '<',
                jobtitle: '<'
            },
            controller: componentController,
            controllerAs: 'vm',
            templateUrl: '/components/job/job.html'
        }
    }

}());