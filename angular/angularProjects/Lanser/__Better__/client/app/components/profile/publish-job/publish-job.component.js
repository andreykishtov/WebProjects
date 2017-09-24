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
            jobAdded: '=',
            publishName: '<',
            jobObj:'<'
        }
    });

    ControllerController.$inject = ['jobService', 'userService', 'localStorageService','$scope'];
    function ControllerController(jobService, userService, localStorageService,$scope) {
        var vm = this;
        vm.active = '';
        vm.message = '';
        vm.setClass = setClass;
        activate();
        vm.searchSkills = searchSkills;
        vm.skillsForSearch = [];
        vm.publishJob = publishJob;
        vm.activateMessage = '';
        vm.newJob = { location: {} };

        vm.addJob = function() {
            vm.active = vm.active === '' ? 'is-active' : '';
            vm.newJob=vm.jobObj;
            // console.log(vm.jobObj);
        };

        $scope.$watch('vm.publishName', function() {
            if(vm.publishName){
                vm.showPublish='true';
            }
        });

        ////////////////

        function publishJob() {
            vm.newJob.skill = vm.skillsForSearch;
            if (!vm.newJob.skill.length) {
                vm.message = 'Please Add Skills To Your Job';
                return;
            }

            getUserData().then(function(data) {
                let user = data.user;
                vm.newJob.email = user.email;
                jobService.addNewJob(vm.newJob);
                vm.messageAfterEdit = 'Job Added Successfully';
                vm.activateMessageAfterEdit = 'is-active';
                vm.addJob();
                vm.jobAdded = true;
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
