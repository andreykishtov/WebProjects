describe('homesController', function() {
    beforeEach(module('googleMaps'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('test getting homes', function() {
        it('checks homes', function() {
            var $scope = {};
            // var homesFactory = {};
            // var controller = $controller('homesController', { $scope: $scope });
            var controllerhome = $controller('homesFactory', { homesFactory: homesFactory });
            //$scope.password = 'longerthaneightchars';
            //$scope.grade();
            controllerhome.gethomes();
            //expect($scope.strength).toEqual('strong');
        });
    });
});