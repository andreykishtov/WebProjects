describe('homesController', function() {
    var __homesController__, __homesFactory__, __usersFactory__, $scope;
    beforeEach(module('googleMaps'));



    beforeEach(inject(function($rootScope, $controller, homesFactory, usersFactory) {
        $scope = $rootScope.$new();
        __homesFactory__ = homesFactory;
        __usersFactory__ = usersFactory;
        __homesController__ = $controller('homesController', {
            $scope: $scope,
            homesFactory: __homesFactory__,
            usersFactory: __usersFactory__
        });
    }));

    it('Api should be defined', function() {
        expect(__homesFactory__.getXlistings).toBeDefined();
        expect(__homesController__.sortBy).toBeDefined();
    });

    it('checks if homes get 10 appartments', function() {
        expect(__homesController__.homes.length).toEqual(10);
    });
});