module.exports = (function() {
    var cons = function() {
        this.first;
        this.last;
    }
    var Node = function(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
    cons.prototype.pushHead = function(val) {
        var node = new Node(val);
        if (this.first == null) {
            this.first = this.last = node;
        } else {
            node.next = this.first;
            this.first.prev = node;
            this.first = node;
        }
    };

    cons.prototype.pushtail = function(data) {
        var node = new Node(data);
        if (this.last == null) {
            this.first = this.last = node;
        } else {
            node.prev = this.last;
            this.last.next = node;
            this.last = node;
        }
    };

    cons.prototype.popHead = function() {
        if (this.first) {
            var tmp = this.first.data;
            this.first = this.first.next;
            this.first.prev = null;
            return tmp;
        } else {
            this.first = null;
            this.last = null;
        }
    };

    cons.prototype.poptail = function() {
        if (this.last.prev) {
            var tmp = this.last.data;
            this.last = this.last.prev;
            this.last.next = null;
            return tmp;
        } else {
            this.first = null;
            this.last = null;
        }
    };


    cons.prototype.show = function() {
        var head = this.first;
        while (head != null) {
            console.log(head.data);
            head = head.next;
        }
    };
    cons.prototype.findVal = function(data, searchfunc) {
        var index = 0;
        var head = this.first;
        while (head != null) {
            if (searchfunc(head.data, data)) {
                return index;
            } else {
                index++;
                head = head.next;
            }
        }
        return null;
    };
    return cons;
})();

function makesearchlogic(first, second) {
    if (first == second)
        return true;
    else {
        return false;
    }
}

/////////
// var list1 = new list;
// list1.pushHead(2);
// list1.pushHead(4);
//list1.pushtail(3);
//list1.show();
//console.log(list1.FindVal(2, makesearchlogic));