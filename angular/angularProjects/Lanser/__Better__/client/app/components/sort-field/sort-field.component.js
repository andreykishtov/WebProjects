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
        vm.skillSearch = false;
        vm.title = '';
        vm.flag = false;
        vm.searchBy = searchBy;
        vm.setClass = setClass;
        vm.searchSkills = searchSkills;
        vm.skillsForSearch = [];
        init();

        $scope.$watch('vm.search', function() {
            vm.searchVar = {};
            if (vm.title != 'skill') {
                vm.searchVar[vm.title] = vm.search;
            }
        });

        $scope.$watch('vm.skillsForSearch.length', function() {
            vm.searchVar = {};
            //console.log(vm.skillsForSearch[vm.skillsForSearch.length - 1]); //_skills
            vm.searchVar[`_${vm.title}s`] = vm.skillsForSearch[0];
        });

        ////////////////
        function init() {
            jobService.getSkills().then(() => {
                vm.skills = jobService.skills;
            });
        }

        function searchBy(title) {
            if (vm.old) {
                vm.setClass('sort-' + vm.old);
            }
            vm.old = title;
            vm.title = title;
            title === 'skill' ? titleIsSkill() : titleIsNotSkill();
        }

        function setClass(name) {
            vm[name] = vm[name] === 'is-primary' ? '' : 'is-primary';
        }

        function searchSkills(skill) {
            let index = vm.skillsForSearch.findIndex(isBigEnough);
            index == -1 ? vm.skillsForSearch.push(skill) : vm.skillsForSearch.splice(index, 1);
            function isBigEnough(element) {
                return element === skill;
            }
        }

        function titleIsSkill() {
            vm.skillSearch = !vm.skillSearch;
            vm.showSearch ? (vm.showSearch = !vm.showSearch) : null;
        }

        function titleIsNotSkill() {
            vm.skillSearch ? (vm.skillSearch = !vm.skillSearch) : null;
            vm.showSearch ? null : (vm.showSearch = !vm.showSearch);
        }
    }
})();
