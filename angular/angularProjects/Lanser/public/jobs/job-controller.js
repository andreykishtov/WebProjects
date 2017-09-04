(function() {
    'use strict';

    angular
        .module('lanser')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope', 'jobService'];

    function mainCtrl($scope, jobService) {
        var vm = this;

        ////////////////
        vm.test = 'xxx';

        jobService.httprequestFunc(callbackJob);
        vm.showtest = function() {
            // console.log('x');
        }


        function callbackJob(resdata, where) {
            vm[where] = resdata.data;
        }


    }
})();