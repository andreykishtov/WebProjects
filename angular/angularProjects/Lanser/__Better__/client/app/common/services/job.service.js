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
            findJobFromServer,
            addNewJob,
            unApply,
            deleteJob
        };
        service.jobsDesc = [];

        return service;

        ////////////////

        function addNewJob(job) {
            return $http.post(`${API.URL}/job`, job).then(function(data) {
                return data;
            });
        }

        function findJob(jobId) {
            return service.original.find(job => {
                if (job._id === jobId) {
                    return job;
                }
            });
        }

        function findJobFromServer(id) {
            return $http.get(`${API.URL}/job/${id}`).then(data => data.data);
        }

        function getJobs() {
            return $http.get(`${API.URL}/job`).then(data => {
                service.original = [];
                service.original = data.data;
                orderJobsList(data.data);
            });
        }

        function getSkills() {
            return $http.get(`${API.URL}/skill`).then(data => (service.skills = data.data));
        }

        function orderJobsList(jobs) {
            service.jobs = jobs.map(element => {
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

                Object.defineProperty(job, '_skills', {
                    enumerable: false,
                    configurable: true,
                    writable: true,
                    value: element.skills
                });
                return job;
            });
        }

        function orderJobsListForDescription(jobs) {
            service.jobsDesc = jobs.map(element => ({
                id: element._id,
                title: element.title,
                publisher: element.publisher,
                publishDate: new Date(element.publishedDate).toDateString(),
                skills: element.skills,
                description: element.description,
                location: element.location
            }));
        }

        function applyToJob(job_id, applicant_id) {
            return $http
                .post(`${API.URL}/job/apply`, {
                    job_id: job_id,
                    applicant_id: applicant_id
                })
                .then(data => data);
        }

        function unApply(job_id, applicant_id) {
            return $http
                .post(`${API.URL}/job/unapply`, {
                    job_id: job_id,
                    applicant_id: applicant_id
                })
                .then(data => data);
        }
        function deleteJob(id) {
            return $http.delete(`${API.URL}/job/${id}`).then(data => data);
        }
    }
})();
