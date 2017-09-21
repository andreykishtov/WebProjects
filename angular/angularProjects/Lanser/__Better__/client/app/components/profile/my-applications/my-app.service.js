(function() {
    'use strict';

    angular.module('lanser').factory('myApplicantService', Service);

    Service.$inject = ['API', '$http'];

    function Service(API, $http) {
        var service = {
            getMyApplications
        };

        return service;

        ////////////////
        function getMyApplications(id) {
            return $http.get(`${API.URL}/job/applicant/${id}`).then(function(data) {
                service.original = data.data;
                orderJobsList(data.data);
            });
        }

        function orderJobsList(jobs) {
            if (!jobs) {
                return;
            }
            service.jobs = [];
            jobs.forEach(function(element) {
                let job = {
                    ['Name']: element.title,
                    publisher: element.publisher,
                    ['Date']: new Date(element.publishedDate).toDateString(),
                    // skills: element.skills,
                    description: element.description
                    // location: element.location
                };
                Object.defineProperty(job, '_id', {
                    enumerable: false,
                    configurable: true,
                    writable: true,
                    value: element._id
                });
                service.jobs.push(job);
            });
        }
    }
})();
