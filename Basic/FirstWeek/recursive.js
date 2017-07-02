test();
function test() {
    var stringToReverse = "abcdefg";
    console.log("Recursive Reverse of String " + stringToReverse + ": ");
    console.log(reverseString(stringToReverse));
}
////////////////////////////reverse string by recursion.
function reverseString(string)
{
    return reverseString(string,0);
}
function reverseString(string,whereToStart) {
    if (string.length == 0) {
        return "";
    }
    else {
        return string = string[string.length - 1] + reverseString(string,whereToStart-1);
    }
}
///////////////////////////splice function that creates new string by adding small strings together in for loop with exeption of the last
function splice(string) {
    var stringtoreturn = "";
    for (var i = 0; i < string.length - 1; ++i) {
        stringtoreturn += string[i];
    }
    return stringtoreturn;
}

