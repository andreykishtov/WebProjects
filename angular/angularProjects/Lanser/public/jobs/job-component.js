(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('lanser')
        .component('job', {
            templateUrl: '/jobs/templates/job-comp.html',
            bindings: {
                test: '<',
                jobsObj: '<',
                showTest: '&'
            }
        });

    // jobcompCtrl.$inject = ['$scope'];

})();