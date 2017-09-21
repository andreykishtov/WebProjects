(function() {
    'use strict';

    angular.module('lanser').factory('userService', Service);

    Service.$inject = ['API', '$http', '$rootScope', 'localStorageService'];

    function Service(API, $http, $rootScope, localStorageService) {
        var service = {
            validate,
            FindUserById,
            FindUsersByIds,
            addUser
        };

        return service;

        ////////////////

        function addUser(userObj) {
            return $http.post(`${API.URL}/user`, userObj).then(function(user) {
                return user.data;
            });
        };

        function validate(email, password) {
            let data = {
                email: email,
                password: password
            };
            return $http.post(`${API.URL}/user/validate`, data).then(function(user) {
                if (user.data) {
                    localStorageService.set('userId', {
                        id: user.data._id,
                        name: user.data.name.first + ' ' + user.data.name.last
                    });
                    $rootScope.$broadcast('userIsLoggedIn');
                }
                return user.data;
            });
        }

        function FindUserById(id) {
            return $http.get(`${API.URL}/user/id/${id}`).then(function(user) {
                return user.data;
            });
        }

        function FindUsersByIds(array) {
            return $http
                .post(`${API.URL}/user/usersByIds`, {
                    array: array
                })
                .then(function(user) {
                    return user.data;
                });
        }
    }
})();