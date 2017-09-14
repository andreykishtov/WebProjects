(function() {
    'use strict';

    angular.module('lanser').factory('jobListService', Service);

    Service.$inject = ['$http', 'API'];
    function Service($http, API) {
        var service = {
            getJobs,
            applyToJob
        };

        return service;

        ////////////////
        function getJobs() {
            return $http.get(`${API.URL}/job`).then(function(data) {
                return data;
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
