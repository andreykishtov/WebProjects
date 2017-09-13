(function() {
    "use strict";

    angular.module("lanser").factory("JobListService", Service);

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

        service.requestService = function(callback, Url, method, where, id) {
            $http({
                method: method,
                url: `${API.URL}${Url}${id}`
            })
                .then(function(response) {
                    callback(response, where);
                })
                .catch(function(error) {
                    throw error;
                });
        };

        // service.httprequestSkills = function(callback, Url, method, where, id) {
        //     $http({
        //         method: method,
        //         url: `${API.URL}${Url}${id}`
        //     }).then(
        //         function successCallback(response) {
        //             callback(response, where);
        //         },
        //         function errorCallback(response) {
        //             if (response) {
        //                 throw response;
        //             }
        //         }
        //     );
        // };

        // service.httprequestSkills = function(callback, where, id) {
        //     $http({
        //         method: method,
        //         url: `${API.URL}/jobs/skills/${id}`
        //     }).then(
        //         function successCallback(response) {
        //             callback(response, where);
        //         },
        //         function errorCallback(response) {
        //             if (response) {
        //                 throw response;
        //             }
        //         }
        //     );
        // };

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

        // service.httpreqgetAllSkills = function(callback, where) {
        //     $http({
        //         method: "GET",
        //         url: `${API.URL}/jobs/skills/`
        //     }).then(
        //         function successCallback(response) {
        //             callback(response, where);
        //         },
        //         function errorCallback(response) {
        //             if (response) {
        //                 throw response;
        //             }
        //         }
        //     );
        // };

        service.httpreqApply = function(job_id, user_id) {
            return $http({
                method: "POST",
                url: `${API.URL}/jobs/apply/`,
                data: {
                    job_id: job_id,
                    user_id: user_id
                }
            }).then(
                function successCallback(response) {
                    return response;
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
