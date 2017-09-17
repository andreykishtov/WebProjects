(function() {
    'use strict';

    angular.module('lanser').factory('jobService', Service);

    Service.$inject = ['$http', 'API'];
    function Service($http, API) {
        var service = {
            getJobs,
            applyToJob,
            findJob,
            getSkills,
            findJobFromServer
        };
        service.jobsDesc = [];

        return service;

        ////////////////

        function findJob(jobId) {
            function findJobId(job) {
                return job._id === jobId;
            }
            return service.original.find(findJobId);
        }
        function findJobFromServer(id) {
            return $http.get(`${API.URL}/job/${id}`).then(function(data) {
                return data.data;
            });
        }

        function getJobs() {
            return $http.get(`${API.URL}/job`).then(function(data) {
                service.original = [];
                service.original = data.data;
                orderJobsList(data.data);
                // orderJobsListForDescription(data.data);
            });
        }

        function getSkills() {
            return $http.get(`${API.URL}/skill`).then(function(data) {
                service.skills = data.data;
            });
        }

        function orderJobsList(jobs) {
            service.jobs = [];
            jobs.forEach(function(element) {
                let job = {
                    ['job Name']: element.title,
                    publisher: element.publisher,
                    ['publish Date']: new Date(element.publishedDate).toDateString(),
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

        function orderJobsListForDescription(jobs) {
            jobs.forEach(function(element) {
                // service.jobsId.push(element._id);
                service.jobsDesc.push({
                    id: element._id,
                    title: element.title,
                    publisher: element.publisher,
                    publishDate: new Date(element.publishedDate).toDateString(),
                    skills: element.skills,
                    description: element.description,
                    location: element.location
                });
            });
        }

        function applyToJob(job_id, applicant_id) {
            let data = {
                job_id: job_id,
                applicant_id: applicant_id
            };

            return $http.post(`${API.URL}/job/apply`, data).then(function(data) {
                return data;
            });
        }
    }
})();
