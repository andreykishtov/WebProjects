(function() {
    "use strict";

    angular.module("lanser").factory("registerService", Service);

    Service.$inject = ["$http", "API"];
    function Service($http, API) {
        var service = {};

        service.getLocations = function() {
            return $http({
                method: "GET",
                url: `${API.URL}/users/locations`
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

        service.addUser = function(callback, job_id, user_id) {
            $http({
                method: "POST",
                url: `${API.URL}/users/addUser`,
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
