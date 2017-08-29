(function() {
    'use strict';

    angular
        .module('Dictionary')
        .factory('counterService', Service);

    function Service() {
        var service = {};
        var counter = {};
        service.counter = function(firstletter) {
            return counter.hasOwnProperty(firstletter) ? counter[firstletter]++ : counter[firstletter] = 0;
        }


        return service;

        ////////////////
    }
})();