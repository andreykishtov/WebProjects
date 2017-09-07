(function() {
    "use strict";

    angular.module("lanser").factory("loginService", Service);

    Service.$inject = ["API"];

    function Service(API) {
        var service = {};

        service.CheckUser = function(callback, email, password) {
            $http({
                method: "POST",
                url: `${API.URL}/users/checkUser`,
                data: {
                    email,
                    password
                }
            }).then(
                function successCallback(response) {
                    callback(response);
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

        ////////////////
    }
})();
