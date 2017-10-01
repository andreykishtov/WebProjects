(function() {
    'use strict';

    // Usage:
    // needs reverse + sort-title:sortBy twoWay dataBinding
    // titles:is names object
    // Creates:
    //

    angular.module('lanser').component('jobTitle', {
        templateUrl: '/components/job/job-title/job-title.html',
        controller: jobTitleController,
        controllerAs: 'vm',
        bindings: {
            titles: '<',
            reverse: '=',
            sortTitle: '='
        }
    });

    // jobTitleController.$inject = ['$event'];
    function jobTitleController() {
        var vm = this;
        vm.reverse = true;
        vm.sortBy = sortBy;

        function sortBy(propertyName) {
            vm.reverse = vm.sortTitle === propertyName ? !vm.reverse : false;
            vm.sortTitle = propertyName;
        }
    }
})();

////////////////reverse="vm.reverse" sort-title="vm.propertyName"
// function clickTitle(name) {
//     vm.clicked = name;
// }
