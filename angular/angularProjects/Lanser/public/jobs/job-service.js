(function() {
    'use strict';

    angular
        .module('lanser')
        .factory('jobService', Service);

    Service.$inject = ['$http'];

    function Service($http) {
        var service = {};

        service.httprequestFunc = function(callback) {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/api'
            }).then(function successCallback(response) {
                callback(response, 'jobs');
            }, function errorCallback(response) {
                if (response) { throw response }
            });
        }

        return service;
    }
})();