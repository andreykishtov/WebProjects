//n = 2;
var o = {
    n: 42,
    fx: function() {
        return
        return function(x) {
            return x * this.n;
        }
    }
}


var f = o.fx();
console.log(f(2));