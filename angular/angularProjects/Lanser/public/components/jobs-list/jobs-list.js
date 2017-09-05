(function() {
    'use strict';

    angular
        .module('lanser')
        .component('jobsList', component());

    function component() {

        function componentController(JoblistService) {
            var vm = this;
            vm.title = "jobs"

            vm.getSkills = function(id) {
                let where = 'skills' + id;
                if (!vm[where]) {
                    JoblistService.httprequestSkills(callback, where, id);
                }
            }

            JoblistService.httprequestJob(callback, 'jobs');

            function callback(resdata, where) {

                vm[where] = resdata.data;
                console.log(vm[where]);
            }

        }

        return {
            bindings: {},
            controller: ['JoblistService', componentController],
            controllerAs: 'vm',
            templateUrl: '/components/jobs-list/jobs-list.html'
        }
    }

}());