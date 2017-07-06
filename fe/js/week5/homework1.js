//create a list
function ListD() {
    var ret = {};
    var list = {
        head: null,
        tail: null
    };

    var constractor = function(data) {
        var item = {};
        item.data = data;
        item.prev = null;
        item.next = null;
        return item;
    }

    function pushHead(data) {
        var item = constractor(data);
        item.data = data;
        if (!list.head) {
            list.head = list.tail = item;
        } else {
            list.head.prev = item;
            item.next = list.head;
            list.head = item;
        }
    }

    function popHead(data) {
        var temp = list.tail.data;
        list.tail = list.tail.prev;
        return temp;
    }

    function popTail(data) {
        var temp = list.head.data;
        list.head = list.head.next;
        return temp;
    }

    function pushTail(data) {
        var item = constractor(data);
        item.data = data;
        if (!list.head) {
            list.head = list.tail = item;
        } else {
            item.prev = list.tail;
            list.tail.next = item;
            list.tail = item;
        }
    }

    function searchll(data, func) {
        var runlist = list.head;
        while (runlist != null) {
            if (func(data, runlist.data))
                return data;
            runlist = runlist.next;
        }
    }

    function showlist() {
        var runlist = list.head;
        while (runlist != null) {
            console.log(runlist.data);
            runlist = runlist.next;
        }
    }
    // ret.CL = createList;
    ret.pushHead = pushHead;
    ret.popHead = popHead;
    ret.pushTail = pushTail;
    ret.popTail = popTail;
    ret.searchll = searchll;
    ret.listshow = showlist;
    return ret;
}

var myll = ListD();

myll.pushHead("10");
myll.pushHead("10");
myll.pushHead("3");
console.log("this is pop tail : " + myll.popTail());
myll.pushHead("7");
myll.pushTail("4");
console.log("this is pop Head : " + myll.popHead());
myll.pushTail("5");
myll.listshow();

function makesearchlogic(first, second) {
    if (first == second)
        return true;
    else {
        return false;
    }
}