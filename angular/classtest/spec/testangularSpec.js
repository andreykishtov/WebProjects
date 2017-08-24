describe('addingNumbersCtrl', function() {
    beforeEach(module('app'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.result', function() {
        it('adding numbers', function() {
            var $scope = {};
            var controller = $controller('addingNumbersCtrl', { $scope: $scope });
            $scope.number1 = 7;
            $scope.number2 = 2;
            $scope.number2 += 7;
            $scope.addnumber();
            expect($scope.result).toEqual(9);
        });
    });
});