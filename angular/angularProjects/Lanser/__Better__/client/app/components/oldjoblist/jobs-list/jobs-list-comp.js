(function() {
    "use strict";

    angular
        .module("lanser")
        .component("jobsList", component())
        .constant("options", {
            method: { get: "GET", post: "POST" },
            URL: {
                skills: "/jobs/skills/",
                allSkills: "/jobs/skills/"
            }
        });

    function component() {
        function componentController(JobListService, $rootScope, $log, $state, localStorageService, options) {
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
                    JobListService.requestService(callback, options.URL.skills, options.method.get, where, id);
                }
            };

            vm.sortBy = function(propertyName) {
                vm.reverse = vm.propertyName === propertyName ? !vm.reverse : false;
                vm.propertyName = propertyName;
            };

            vm.applyToJob = function(job_id) {
                let user = localStorageService.get("userId");
                if (!user) {
                    $log.log("no user");
                    return $state.go("login");
                }
                JobListService.httpreqApply(job_id, user.user_id).then(function(response) {
                    console.log(response);
                });
            };

            JobListService.httprequestJob(callback, vm.title);
            console.log(options.URL.allSkills, options.method.get);
            JobListService.requestService(callback, options.URL.allSkills, options.method.get, "skillsObj");

            function callback(resdata, where) {
                vm[where] = resdata.data;
            }
            //JobListService.httpreqgetAllSkills(callback, "skillsObj");
        }

        return {
            bindings: {},
            controller: ["JobListService", "$rootScope", "$log", "$state", "localStorageService", "options", componentController],
            controllerAs: "vm",
            templateUrl: "/components/jobs-list/jobs-list.html"
        };
    }
})();
