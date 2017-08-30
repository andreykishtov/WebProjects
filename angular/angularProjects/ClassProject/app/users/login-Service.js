(function() {
    'use strict';

    angular
        .module('googleMaps')
        .factory('loginService', Service);

    function Service() {
        var loginService = {};
        loginService.checkUser = function(users, loginObj) {
                users.forEach(function(element) {
                    if (element.first_name === loginObj.name && element.last_name == loginObj.password) {
                        return element;
                    }
                }, this);
                return false;
            }
            ////////////////
        return loginService;

    }
})();