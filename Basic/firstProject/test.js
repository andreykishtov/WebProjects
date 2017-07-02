/*var x = 10;
var y = 29;
swap(x, y);

function swap(a, b) {
    var temp = y;
    y = x;
    x = temp;
}

console.log("x=" + x);
console.log(y);

*/
/*var text = "outside"
ggg();

function ggg() {
    console.log(text);
    var text = "inside";
}*/

//console.log(true + false)

/*
var check = "123,147,159,258,369,357,456,789";
check = check.split(",");
console.log(check);

*/

var x = (function mul(a) {

    return a * (function(b) {

        return b * (function(c) {

            return c;
        })(4)
    })(3)
})(2)

console.log(x);
f()

(function name(params) {

})();

//console.log(mul(2)(3)(4));