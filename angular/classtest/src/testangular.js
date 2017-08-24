angular.module('app', [])
    .controller('addingNumbersCtrl', function addingNumbers($scope) {
        $scope.number1;
        $scope.number2;
        $scope.addnumber = function() {
            $scope.result = parseInt($scope.number1 + $scope.number2);
        };
    });