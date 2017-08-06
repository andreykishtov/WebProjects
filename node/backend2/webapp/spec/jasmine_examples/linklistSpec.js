var linklist = require('../../lib/jasmine_examples/linklist.js');

describe("empty", function() {
    var list;
    var list2;
    beforeEach(function() {
        list = new linklist;
        list2 = new linklist;
    });
    /////////////////////////////////////
    it("check when Empty PopHead", function() {
        list.finVal();
        list.pushHead(1);
        list2.pushHead(1);
        expect(list).toEqual(list2);
        list.popHead();
        list2.popHead();
        list.popHead();
        list2.popHead();
        expect(list).toEqual(list2);
        list.poptail(1);
        list2.poptail(1);
        expect(list.first).toEqual(list.last);
    });
    /////////////////////////////////////////
    it("check with one Item In LinkedList", function() {
            list.pushHead(1);
            expect(list).toEqual(list2);
            list.poptail();
            expect(list).toEqual(list2);
            list.pushtail(1);
            expect(list).toEqual(list2);
            list.finVal(1);
            list.finVal();
        })
        /////////////////////////////////////////////////
    it("check with one Item In LinkedList", function() {
        list.pushHead(1);
        list.pushHead(2);
        list.pushHead(3);
        list.pushHead(3);
        list2.pushHead(1);
        list2.pushHead(2);
        list2.pushHead(3);
        list2.pushHead(3);
        expect(list).toEqual(list2);
        list.poptail();
        list2.poptail();
        expect(list).toEqual(list2);
        list.pushtail(2);
        list2.pushtail(2);
        expect(list).toEqual(list2);
        list2.findVal(1, makesearchlogic(1, 1));
        // list2.findVal();
    })
});

function makesearchlogic(first, second) {
    if (first == second)
        return true;
    else {
        return false;
    }
}