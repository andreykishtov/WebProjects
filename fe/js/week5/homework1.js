//create a list
function ListD() {
    var ret = {};
    var list = {};
    list.data = "0";
    list.last = null;
    list.first = null;

    function pushHead(data) {
        var item = {};
        item.data = data;
        item.next = list.first;
        item.prev = list;
        list.first = item;
    }

    function popHead(data) {
        list.first = item.next;
    }

    function popTail(data) {
        list.last = item.prev;
    }

    function pushTail(data) {
        var item = {};
        item.data = data;
        item.prev = list.last;
        list.last = item;
        item.next = list;
    }

    function searchll(data) {

    }

    function showlist() {
        return list;
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

// myll.pushHead(data);
// myll.popHead(data);
// myll.pushTail(data);
// myll.popTail(data);
// myll.searchll(data);


//myll.pushHead("10");
//myll.pushHead("10");
myll.pushHead("3");
myll.pushTail("4");
myll.pushTail("5");
var list = myll.listshow();
console.log(list.first);