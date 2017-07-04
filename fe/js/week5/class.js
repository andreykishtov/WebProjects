// var great = function() {
//     return {
//         x: "A"
//     }
// }

// var save = function() {
//     console.log(this.x);
// }

// var binded = function(save, great) {
//     var newFunc = function() {
//         save.apply(great(), arguments);
//     }
//     return newFunc;
// }

// binded();

///closure
// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);
// console.log(add5);


function makeZZZ() {
    var z;
    var ret = {};

    function setValuesOfZ(value) {
        z = value;
    }

    function getValueOfZ() {
        return z++;
    }
    ret.setX = setValuesOfZ;
    ret.getZ = getValueOfZ;
    return ret;
}

var myZ = makeZZZ();

myZ.setX(5);
var myNewGet = myZ.getZ;
for (var index = 0; index < 10; index++) {
    console.log(myNewGet());

}
//console.log(myNewGet());