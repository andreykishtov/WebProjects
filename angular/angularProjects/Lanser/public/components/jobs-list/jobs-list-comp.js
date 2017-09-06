(function() {
    'use strict';

    angular
        .module('lanser')
        .component('jobsList', component());

    function component() {

        function componentController(JoblistService, $scope) {
            var vm = this;
            vm.title = "jobs"
            vm.reverse = true;
            vm.getSkills = function(id) {
                let where = 'skills' + id;
                if (!vm[where]) {
                    JoblistService.httprequestSkills(callback, where, id);
                }
            }

            vm.sortBy = function(propertyName) {
                vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
                vm.propertyName = propertyName;
            };

            JoblistService.httprequestJob(callback, vm.title);

            function callback(resdata, where) {

                vm[where] = resdata.data;
            }

        }

        return {
            bindings: {},
            controller: ['JoblistService', '$scope', componentController],
            controllerAs: 'vm',
            templateUrl: '/components/jobs-list/jobs-list.html'
        }
    }

}());