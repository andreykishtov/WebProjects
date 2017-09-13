(function() {
    'use strict';

    angular.module('lanser').filter('jobFilter', Filter);

    function Filter() {
        return FilterFilter;

        ////////////////

        function FilterFilter(Params, howToFilter) {
            return Params;
        }
    }
})();
