(function() {
    "use strict";

    angular.module("lanser").factory("JoblistService", Service);

    Service.$inject = ["$http", "API"];

    function Service($http, API) {
        var service = {};

        service.httprequestJob = function(callback, where) {
            $http({
                method: "GET",
                url: `${API.URL}/jobs/`
            }).then(
                function successCallback(response) {
                    function callbackforSkills(resdata, skills) {
                        response.data.forEach(function(element) {
                            element[skills] = [];
                            for (var skil of resdata.data) {
                                if (skil.job_id === element.id) {
                                    element[skills].push(skil.title);
                                }
                            }
                        }, this);
                        callback(response, where);
                    }
                    service.httpreqgetJobSkills(callbackforSkills, "skills");
                },
                function errorCallback(response) {
                    if (response) {
                        throw response;
                    }
                }
            );
        };

        service.httprequestSkills = function(callback, where, id) {
            $http({
                method: "GET",
                url: `${API.URL}/jobs/skills/${id}`
            }).then(
                function successCallback(response) {
                    callback(response, where);
                },
                function errorCallback(response) {
                    if (response) {
                        throw response;
                    }
                }
            );
        };

        service.httpreqgetJobSkills = function(callback, where) {
            $http({
                method: "GET",
                url: `${API.URL}/jobs/skills/jobs`
            }).then(
                function successCallback(response) {
                    callback(response, where);
                },
                function errorCallback(response) {
                    if (response) {
                        throw response;
                    }
                }
            );
        };

        service.httpreqgetAllSkills = function(callback, where) {
            $http({
                method: "GET",
                url: `${API.URL}/jobs/skills/`
            }).then(
                function successCallback(response) {
                    callback(response, where);
                },
                function errorCallback(response) {
                    if (response) {
                        throw response;
                    }
                }
            );
        };

        service.httpreqApply = function(job_id, user_id) {
            $http({
                method: "POST",
                url: "http://localhost:3000/api/apply/",
                data: {
                    job_id: job_id,
                    user_id: user_id
                }
            }).then(
                function successCallback(response) {
                    callback(response, where);
                },
                function errorCallback(response) {
                    if (response) {
                        throw response;
                    }
                }
            );
        };

        return service;
    }
})();
