(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular.module('lanser').component('publishJob', {
        templateUrl: './components/profile/publish-job/publish-job.html',
        controller: ControllerController,
        controllerAs: 'vm',
        bindings: {
            publishName: '<',
            jobObj: '<'
        }
    });

    ControllerController.$inject = ['jobService', 'userService', 'localStorageService', '$scope', '$rootScope'];
    function ControllerController(jobService, userService, localStorageService, $scope, $rootScope) {
        var vm = this;
        vm.active = '';
        vm.message = '';
        activate();
        vm.skillsForSearch = [];
        vm.activateMessage = '';
        vm.newJob = { location: {} };
        vm.setClass = setClass;
        vm.searchSkills = searchSkills;
        vm.publishJob = publishJob;
        vm.addJob = addJob;

        $scope.$watch('vm.publishName', function() {
            if (vm.publishName) {
                vm.showPublish = 'true';
            }
        });

        ////////////////

        function addJob() {
            vm.active = vm.active === '' ? 'is-active' : '';
            vm.newJob = vm.jobObj;
            // console.log(vm.jobObj);
        }

        function publishJob() {
            vm.newJob.skill = vm.skillsForSearch;
            if (!vm.newJob.skill.length) {
                vm.message = 'Please Add Skills To Your Job';
                return;
            }

            getUserData().then(data => {
                let user = data;
                vm.newJob.email = user.email;
                jobService.addNewJob(vm.newJob);
                vm.messageAfterEdit = 'Job Added Successfully';
                vm.activateMessageAfterEdit = 'is-active';
                vm.addJob();
                ////
                $rootScope.$broadcast('Added Job', { text: 'added Job' });

                vm.newJob = { location: {} };
            });
        }

        function getUserData() {
            let login = localStorageService.get('userId');
            return userService.FindUserById(login.id);
        }

        function searchSkills(skill) {
            let index = vm.skillsForSearch.findIndex(isBigEnough);
            index == -1 ? vm.skillsForSearch.push(skill) : vm.skillsForSearch.splice(index, 1);

            function isBigEnough(element) {
                return element === skill;
            }
        }

        function setClass(name) {
            vm[name] = vm[name] === 'is-primary' ? '' : 'is-primary';
        }

        function activate() {
            jobService.getSkills().then(() => {
                vm.skills = jobService.skills;
            });
        }
    }
})();
