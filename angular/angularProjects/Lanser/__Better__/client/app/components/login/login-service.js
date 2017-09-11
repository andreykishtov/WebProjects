(function() {
    "use strict";

    angular.module("lanser").factory("loginService", Service);

    Service.$inject = ["API", "$http"];

    function Service(API, $http) {
        var service = {};

        service.CheckUser = function(email, password) {
            return $http({
                method: "POST",
                url: `${API.URL}/users/checkUser`,
                data: {
                    email,
                    password
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

        ////////////////
    }
})();
