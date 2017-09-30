(function() {
    'use strict';

    angular.module('lanser').factory('myJobsService', Service);

    Service.$inject = ['API', '$http', 'userService'];

    function Service(API, $http, userService) {
        var service = {
            getMyJobs
        };

        return service;

        ////////////////
        function getMyJobs(id) {
            return getMyEmail(id)
                .then(function(email) {
                    return $http.get(`${API.URL}/job/email/${email}`);
                })
                .then(function(data) {
                    service.original = data.data;
                    service.jobs = orderJobsList(data.data);
                    return data;
                })
                .catch(data => {
                    console.log(data.data);
                });
        }

        function getMyEmail(id) {
            return userService.FindUserById(id).then(function(data) {
                return data.email;
            });
        }

        function orderJobsList(jobs) {
            if (!jobs) {
                return;
            }
            return jobs.map(element => {
                let job = {
                    ['Name']: element.title,
                    publisher: element.publisher,
                    ['Date']: new Date(element.publishedDate).toDateString(),
                    // skills: element.skills,
                    // applicants: element.applicants,
                    description: element.description
                    // location: element.location
                };
                Object.defineProperty(job, '_id', {
                    enumerable: false,
                    configurable: true,
                    writable: true,
                    value: element._id
                });
                Object.defineProperty(job, '_applicants', {
                    enumerable: false,
                    configurable: true,
                    writable: true,
                    value: element.applicants
                });
                return job;
            });
        }
    }
})();
