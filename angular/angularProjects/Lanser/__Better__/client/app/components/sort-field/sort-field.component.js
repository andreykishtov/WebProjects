(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('sortField', {
        templateUrl: 'components/sort-field/sort-field.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {
            searchVar: '=',
            titles: '<'
        }
    });

    ControllerController.$inject = ['jobService', '$scope'];
    function ControllerController(jobService, $scope) {
        var vm = this;
        vm.showSearch = false;
        vm.title = '';
        vm.flag = false;
        vm.skillsForSearch = [];
        init();
        ////////////////
        function init() {
            jobService.getSkills().then(() => {
                vm.skills = jobService.skills;
            });
        }

        vm.searchBy = function(title) {
            vm.showSearch = !vm.showSearch;
            if (vm.showSearch) {
                vm.title = title;
            }
        };
        vm.setClass = function(name) {
            vm[name] = vm[name] === 'is-primary' ? '' : 'is-primary';
        };

        vm.searchSkills = function(skill) {
            let index = vm.skillsForSearch.findIndex(isBigEnough);
            index == -1 ? vm.skillsForSearch.push(skill) : vm.skillsForSearch.splice(index, 1);
            function isBigEnough(element) {
                return element === skill;
            }
        };

        $scope.$watch('vm.search', function() {
            vm.searchVar = {};
            vm.searchVar[vm.title] = vm.search;
        });
    }
})();
