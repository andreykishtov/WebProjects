describe('usersController', function() {
    var usersController;

    beforeEach(module("googleMaps"));

    beforeEach(inject(function($controller, usersFactory) {
        __usersFactory__ = usersFactory;
        __usersController__ = $controller('usersController', {
            usersFactory: __usersFactory__
        });
    }));


    describe('Testing controllers API of Users Controller', function() {
        it('Api should be defined', function() {
            expect(__usersFactory__.getUsers).toBeDefined();
        });
    });

    describe('testing get homes to get users', function() {
        it('Api should be defined', function() {
            //var vm = $controller;
            expect(__usersController__.users.length).toEqual(100);
        });
    });
});