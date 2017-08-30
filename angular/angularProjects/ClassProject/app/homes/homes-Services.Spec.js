describe("servService", function() {
    var __homesFactory__;

    beforeEach(module("googleMaps"));

    beforeEach(inject(function(homesFactory) {
        __homesFactory__ = homesFactory;
    }));

    describe('Should have the api in factory', function() {
        it('should be defined', function() {
            expect(__homesFactory__.getXlistings).toBeDefined();
            expect(__homesFactory__.addHome).toBeDefined();
            expect(__homesFactory__.remove).toBeDefined();
            expect(__homesFactory__.initMap).toBeDefined();

        })
    })

    it("check array", function() {
        expect(__homesFactory__.getXlistings()).toEqual(jasmine.any(Array));
        expect(__homesFactory__.getXlistings()).toEqual(jasmine.any(Object));
    });

    it('check users', function() {
        expect(__homesFactory__.getXlistings().length).toEqual(10); //true
    });

    describe('check 101', function() {
        it('check users', function() {
            __homesFactory__.addHome({});
            expect(__homesFactory__.getXlistings().length).toEqual(11); //true
        });
    })

    it('check users', function() {
        __homesFactory__.remove();
        expect(__homesFactory__.getXlistings().length).toEqual(101); //true
    });

    it('check users', function() {
        __homesFactory__.remove();
        expect(__homesFactory__.getXlistings().length).toEqual(101); //true
    });

});