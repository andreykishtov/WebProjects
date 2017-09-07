(function() {
    "use strict";

    angular.module("lanser").component("jobsList", component());

    function component() {
        function componentController(
            JoblistService,
            $rootScope,
            $log,
            $state,
            localStorageService
        ) {
            init();
            function init() {
                if (!localStorageService.get("token")) {
                    return ($rootScope._currentUser = null);
                }

                return ($rootScope._currentUser = { token: localStorageService.get("token") });
            }

            var vm = this;
            vm.apply = true;
            $rootScope.$on("loggedIn", () => {
                console.log(vm.apply);
                vm.apply = true;
            });
            vm.searchText = "Please Enter Skill";
            vm.title = "jobs";
            vm.reverse = true;
            vm.getSkills = function(id) {
                let where = "skills" + id;
                if (!vm[where]) {
                    JoblistService.httprequestSkills(callback, where, id);
                }
            };

            vm.sortBy = function(propertyName) {
                vm.reverse = vm.propertyName === propertyName ? !vm.reverse : false;
                vm.propertyName = propertyName;
            };

            vm.applyToJob = function(job_id) {
                var user_Id = localStorageService.get("userId");
                if (!user_Id) {
                    $log.log("no user");
                    return $state.go("login");
                }

                // JoblistService.httpreqApply(job_id,user_id);
            };

            JoblistService.httprequestJob(callback, vm.title);

            function callback(resdata, where) {
                vm[where] = resdata.data;
            }

            JoblistService.httpreqgetAllSkills(callback, "skillsObj");
        }

        return {
            bindings: {},
            controller: [
                "JoblistService",
                "$rootScope",
                "$log",
                "$state",
                "localStorageService",
                componentController
            ],
            controllerAs: "vm",
            templateUrl: "/components/jobs-list/jobs-list.html"
        };
    }
})();
