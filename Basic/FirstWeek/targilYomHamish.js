test()

function test() {
    var palindrom="Not Palindrom";
    if(isPalindrom("a1221a"))
    {
        palindrom="Palindrom";
    }
    console.log("String Is:" + palindrom );
}
/////////////////////////////////
////////////////////////////////
function isPalindrom(palindromstring) {
    if (checkString(palindromstring) && checkEvenLetters(palindromstring) && checkLetterPalindrom(palindromstring)) {
        return true;
    }
    else {
        return false;
    }
}
////////////////////////////////////
function checkString(stringToCheck) {
    if (typeof(stringToCheck) === "string") {
        return true;
    }
    else {
        return false;
    }
}
/////////////////////////////// checks letters first to last
function checkLetterPalindrom(stringToCheck) {
    for (var i = 0; i < stringToCheck.length / 2; ++i) {
        if (stringToCheck[i] != stringToCheck[stringToCheck.length - i - 1]) {
            return false;
        }
    }
    return true;
}
/////////////////////////////////////////
function checkEvenLetters(stringToCheck) {
    if (stringToCheck.length % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}