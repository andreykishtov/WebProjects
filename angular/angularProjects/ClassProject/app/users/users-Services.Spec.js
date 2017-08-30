describe("serv service", function() {
    var homesFact;
    var loginService;

    beforeEach(module("googleMaps"));

    beforeEach(inject(function(__usersFactory__, __loginService__) {
        homesFact = __usersFactory__,
            loginService = __loginService__;
    }));

    it("checks if users are and array of objects", function() {
        expect(homesFact.getUsers()).toEqual(jasmine.any(Array));
        expect(homesFact.getUsers()).toEqual(jasmine.any(Object));
    });

    it("checks if all users exists", function() {
        expect(homesFact.getUsers().length).toEqual(100);
    });

    it("checks if login function exsists", function() {
        expect(loginService.checkLogin()).toBeDefined();
    });

});