//n = 2;
var o = {
    n: 42,
    fx: function() {
        { n: 4 };
        return function(x) {
            return x * this.n;
        }
    }
}


var f = o.fx();
console.log(f(2));