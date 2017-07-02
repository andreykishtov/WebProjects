


var o = {
    a: 1, b: "bbb", c: true, d: [3, 4, 5], e: function () { console.log("works") }, f: { a: 1, b: 2 }, g: undefined
}


var x=JSON.stringify(o);
console.log(x);
var y=JSON.parse(x);
console.log(y);