(function () {
    'use strict';

    angular
        .module('lanser')
        .factory('JoblistService', Service);

    Service.$inject = ['$http'];

    function Service($http) {
        var service = {};

        service.httprequestJob = function (callback, where) {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/api/jobs'
            }).then(function successCallback(response) {
                function callbackforSkills(resdata, skills) {
                    response.data.forEach(function (element) {
                        element[skills] = [];
                        for (var skil of resdata.data) {
                            if (skil.job_id === element.id) {
                                element[skills].push(skil.title);
                            }
                        }
                    }, this);
                    callback(response, where);
                }
                service.httpreqgetJobSkills(callbackforSkills, 'skills')
            }, function errorCallback(response) {
                if (response) {
                    throw response
                }
            });
        }


        service.httprequestSkills = function (callback, where, id) {
            $http({
                method: 'GET',
                url: `http://localhost:3000/api/skills/${id}`
            }).then(function successCallback(response) {
                callback(response, where);
            }, function errorCallback(response) {
                if (response) {
                    throw response
                }
            });
        }

        service.httpreqgetJobSkills = function (callback, where) {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/api/skills'
            }).then(function successCallback(response) {
                callback(response, where);
            }, function errorCallback(response) {
                if (response) {
                    throw response
                }
            });
        }


        return service;
    }
})();