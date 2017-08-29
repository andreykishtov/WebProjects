(function() {
    'use strict';

    angular
        .module('Dictionary')
        .controller('DictionaryController', DictionaryController);

    DictionaryController.$inject = ['$scope', 'translatorDatabase', 'counterService'];

    function DictionaryController($scope, translatorDatabase, counterService) {
        var Database;
        $scope.searchCounter = 0;
        var vm = this;
        var firstLetter = translatorDatabase.SendFirstLetter();

        var counterfunc = counterService.counter;
        $scope.getInputFromUsers = function() {
            if ($scope.keyword.length === 1) {
                $scope.searchCounter = counterService.counter($scope.keyword[0]);
                $scope.translation = firstLetter[$scope.keyword];
            }
            if ($scope.keyword.length > 1) {
                $scope.searchCounter = counterfunc($scope.keyword[0]);
                Database = translatorDatabase.GetName($scope.keyword[0] + $scope.keyword[1]);
                if (Database[$scope.keyword]) {
                    $scope.translation = Database[$scope.keyword];
                } else {
                    $scope.translation = '';
                }
                //$scope.translation = Database;
            }
        }
    }
})();