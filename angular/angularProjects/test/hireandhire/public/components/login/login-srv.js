(function () {
    'use strict';

    angular.module('hireandhire').factory('loginService', Service);

    Service.$inject = ['$http'];

    function Service($http) {
        var service = {};

        service.validateUser = function (email, password) {
            return $http({
                method: 'POST',
                url: 'http://localhost:3000/api/validateuser',
                data: {
                    'email': email,
                    'password': password
                }
            }).then(
                function successCallback(response) {
                    // if (response.data) {
                    // console.log('From service: ' + JSON.stringify(response));
                    return response;
                    // }
                },
                function errorCallback(response) {
                    return console.log("Insert Failed");
                }
            );
        };

        return service;
    }
})();