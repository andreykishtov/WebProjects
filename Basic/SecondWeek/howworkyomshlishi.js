test();

function test() {
    var array1 = [7, 19, 48, 5];
    var array2 = [3, 3, 5, 11, 7];
    var def = 5;
    var x = zip(array1, array2, addArrs, 5);
    console.log("your Array Is: " + x);
}
///////////////////////////////////////////function zip
function zip(array1, array2, func, def) {
    var out = [];
    var len;
    if (array1.length >= array2.length) {
        len = array1.length;
    } else {
        len = array2.length;
    }
    for (var i = 0; i < len; ++i) {
        if (array1[i] == undefined) {
            array1[i] = def;
        } else if (array2[i] == undefined) {
            array2[i] = def;
        }
        out[i] = func(array1[i], array2[i]);
    }
    return out;
}
///////////////////////////////////function to add numbers.
function addArrs(a1, a2) {
    return (a1 + a2);
}