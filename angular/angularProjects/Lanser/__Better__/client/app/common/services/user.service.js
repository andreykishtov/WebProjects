(function() {
    'use strict';

    angular.module('lanser').factory('userService', Service);

    Service.$inject = ['API', '$http', '$rootScope', 'localStorageService'];

    function Service(API, $http, $rootScope, localStorageService) {
        var service = {
            validate
        };

        return service;

        ////////////////

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
    }
})();
