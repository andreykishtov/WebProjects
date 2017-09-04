(function() {
    'use strict';

    angular
        .module('lanser')
        .component('jobsList', component());

    function component() {

        function componentController(JobsService) {
            var vm = this;
            vm.title = "jobs"
            JobsService.httprequestFunc(callbackJob);

            function callbackJob(resdata, where) {
                vm[where] = resdata.data;
            }

        }

        return {
            bindings: {},
            controller: ['JobService', componentController],
            controllerAs: 'vm',
            templateUrl: '/components/jobs/jobs-list.html'
        }
    }

}());