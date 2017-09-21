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
            jobAdded: '='
        }
    });

    ControllerController.$inject = ['jobService','userService','localStorageService'];
    function ControllerController(jobService,userService,localStorageService) {
        var vm = this;
        vm.active = '';
        vm.message="";
        vm.setClass = setClass;
        activate();
        vm.searchSkills = searchSkills;
        vm.skillsForSearch = [];
        vm.publishJob = publishJob;
        vm.activateMessage = '';
        vm.newJob = {location:{}};

        vm.addJob = function() {
            vm.active = vm.active === '' ? 'is-active' : '';
        };

        ////////////////

        function publishJob() {
            vm.newJob.skill = vm.skillsForSearch;
            if(!vm.newJob.skill.length){
                vm.message='Please Add Skills To Your Job'
                vm.activateMessage = 'is-active';    
                return;
            }
            if(!vm.newJob.title){
                vm.message='Please Name Your Job'
                vm.activateMessage = 'is-active';    
                return;
            }
            if(!vm.newJob.location.lng){
                vm.message='Please Add longitude'
                vm.activateMessage = 'is-active';    
                return;
            }
            if(!vm.newJob.location.lat){
                vm.message='Please Add latitude'
                vm.activateMessage = 'is-active';    
                return;
            }
            getUserData().then(function (data) {
                let user= data.user;
                vm.newJob.email=user.email;
                jobService.addNewJob(vm.newJob);
                vm.messageAfterEdit='Job Added Successfully'
                vm.activateMessageAfterEdit = 'is-active';
                vm.addJob();
                vm.jobAdded=true;
                vm.newJob = {location:{}};
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
