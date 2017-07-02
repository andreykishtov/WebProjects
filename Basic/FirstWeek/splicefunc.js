test();
////////////////////////////////////////test function
function test() {
    var array = [1, 2, 3, 4, 5, 6, 7];
    var stringarray=["moseh","homes","kirtis","forten","sosu","andre"]
    array = splicestring(array, 3, 1, 1,2,3);
    console.log(array);
    console.log(splicestring(stringarray,3,1,"rigor"))
}
///////////////////////////////////////////////////splice function
function splicestring(array, startValue, deleteCount, insertElement1, insertElement2, insertElement3) {
    var newArray = [];
    var j = 0;
    var k;
    for (var i = startValue - 1; i < array.length; ++i) {
            for (k = 0; k < deleteCount; ++k) {
                ++i;
            }
            if (insertElement1 != undefined) {
                newArray[j] = insertElement1;
                ++j;
                if (insertElement2 != undefined) {
                    newArray[j] = insertElement2;
                    ++j;
                    if (insertElement3 != undefined) {
                        newArray[j] = insertElement3;
                        ++j;
                    }
                }
            }
        if (i >= array.length) //for last one
        {
            return newArray;
        }
        newArray[j] = array[i];
        ++j;
    }
    return newArray;
}