angular.module('app', [])
    .controller('addingNumbersCtrl', function addingNumbers($scope) {
        $scope.number1;
        $scope.number2;
        $scope.addnumber = function() {
            $scope.result = parseInt($scope.number1) + parseInt($scope.number2);
        };
    });


X || y

//(5>4) && 'ABC'
//unput = unput || '';
///airbnb home langitude 

//show list of houses
// descriptions
// rooms
// ownerId-userId
// view map of seeing houses