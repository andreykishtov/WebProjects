describe('DictionaryController tests', function() {
    var __DictionaryController__, __translatorDatabase__, __counterService__;

    beforeEach(module('googleMaps'));



    beforeEach(inject(function($controller, translatorDatabase, counterService) {
        __translatorDatabase__ = translatorDatabase;
        __counterService__ = counterService;
        __DictionaryController__ = $controller('DictionaryController', {
            translatorDatabase: __translatorDatabase__,
            counterService: __counterService__
        });
    }));

    describe('Testing controllers API', function() {
        it('Api should be defined', function() {
            expect(__DictionaryController__.getInputFromUsers).toBeDefined();
            expect(__translatorDatabase__.SendFirstLetter).toBeDefined();
        });
    });

    describe('testing get homes', function() {
        it('Api should be defined', function() {
            expect(__homesController__.homes.length).toEqual(100);
        });
    });
});