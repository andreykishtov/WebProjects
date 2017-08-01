describe("math", function() {
    var math = require('../../lib/jasmine_examples/math.js');

    //one test
    it("should be able to add 2 numbers correctly", function() {
        var sum = math.addNums(3, 4) // cb function
        expect(sum).toEqual(7); //it works with matcher
    });
    //second test
    it("should be able to add 2 numbers (minus and plus) correctly", function() {
        var sum = math.addNums(13, -4) // cb function
        expect(sum).toEqual(9); //it works with matcher
    });
});