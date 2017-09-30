(function() {
    'use strict';

    angular.module('lanser').filter('startFrom', Filter);

    function Filter() {
        return FilterFilter;

        ////////////////

        function FilterFilter(input, start) {
            if (!input) {
                return;
            }
            start = +start; //parse to int
            return input.slice(start);
        }
    }
})();
