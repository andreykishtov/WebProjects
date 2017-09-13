(function() {
    'use strict';

    angular.module('lanser').factory('loginService', Service);

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
                    localStorageService.set('userId', user.data._id);
                    $rootScope.$broadcast('userIsLoggedIn');
                }
                return user.data;
            });
        }
    }
})();
