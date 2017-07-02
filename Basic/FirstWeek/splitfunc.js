test();
function test() {
    console.log(strSplit("aac1aacaaca1ac1aac", "1"));
}
//////////////////////////////split function
function strSplit(str, splitChar) {
    var array = [];
    var j = 0;
    for (var i = 0; i < str.length; ++i) {
        if (str[i] === splitChar) {
            ++j;
            ++i;
        }
        if (array[j] === undefined) {
            array[j] = "";
        }
        array[j] += str[i];
        if (i >= str.length) {
            array[j] = "";
        }
    }
    return array;
}