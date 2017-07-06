var LinkedList = function(e) {

    var that = this,
        first, last;

    var Node = function(value) { //Constractor
        this.value = value;
        var next = {};
        var prev = {};
    };


    this.push = function(value) {
        var node = new Node(value);
        if (first == null) {
            first = last = node;
        } else {
            node.next = first;
            first.prev = node;
            first = node;
        }
    };

    this.pushtail = function(value) {
        var node = new Node(value);
        if (last == null) {
            first = last = node;
        } else {
            node.prev = last;
            last.next = node;
            last = node;
        }
    };
    this.pop = function() {
        var tmp = first.value;
        first = first.next;
        first.prev = null;
        return tmp;
    };

    this.poptail = function(value) {
        var tmp = last.value;
        last = last.prev;
        last.next = null;
        return tmp;

    };
    this.show = function() {
        var head = first;
        while (head != null) {
            console.log(head.value);
            head = head.next;
        }
    };


    this.FindVal = function(data) {
        var index = 0;
        var head = first;
        while (head != null) {
            if (head.value == data) {
                return index;
            } else {
                index++;
                head = head.next;
            }
        }
        return null;
    };
}

var linkedList = new LinkedList();


linkedList.push(12);
linkedList.push(55);
linkedList.push(333);
linkedList.push(44);
linkedList.pushtail(44);
linkedList.pushtail(22);
linkedList.pushtail(244);
linkedList.show();

console.log('\n');
console.log('\n');
console.log(linkedList.poptail());

console.log('\n');
console.log('\n');

linkedList.show();

var findValue = linkedList.FindVal(22222);
console.log('\n');
console.log('\n');
if (findValue)
    console.log(findValue);
else console.log("the number not exist");