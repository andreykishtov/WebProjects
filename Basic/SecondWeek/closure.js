function makeAdder(toAdd) {

    var newAdder = function (num) {
        return (num + toAdd);
    }
    return newAdder;
}

var adder5 = makeAdder(5);
var adder7 = makeAdder(7);

console.log(adder5(3));
console.log(adder7(3));