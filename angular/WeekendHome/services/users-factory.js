(function() {
    'use strict';

    angular
        .module('googleMaps')
        .factory('usersFactory', usersFactory);

    function usersFactory() {
        var usersFactory = {}; //userFunc Object


        var users = usersJson;

        usersFactory.getUsers = function() {
            return users;
        }

        return usersFactory;
    }
})();