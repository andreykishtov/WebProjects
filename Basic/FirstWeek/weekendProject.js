test();



function test()
{
    console.log("")
    var text=`Left till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. 

Brother set had private his letters observe outward resolve. Shutters ye marriage to throwing we as. Effect in if agreed he wished wanted admire expect. Or shortly visitor is comfort placing to cheered do. Few hills tears are weeks saw. Partiality insensible celebrated is in. Am offended as wandered thoughts greatest an friendly. Evening covered in he exposed fertile to. Horses seeing at played plenty nature to expect we. Young say led stood hills own thing get. `
text=reverseString(text);
text=strSplit(text,"a");
text=splicestring(text,5,0,"mamakia");
//console.log(text);
text=bubbleSort(text,conditionsecondstring);
console.log(text);
}
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

function reverseString(string) {
    if (string.length == 0) {
        return "";
    }
    else {
        return string = string[string.length - 1] + reverseString(splice(string));
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
/////////////////////////////////////////////////
function splicestring(array, startValue, deleteCount, insertElement1, insertElement2, insertElement3) {
    var newArray = [];
    var j = 0;
    var k;
    for (var i = 0; i < array.length; ++i) {
        if (i == startValue - 1) {
            for (k = 0; k < deleteCount; ++k) {
                ++i;
            }
            if (insertElement1 != null) {
                newArray[j] = insertElement1;
                ++j;
                if (insertElement2 != null) {
                    newArray[j] = insertElement2;
                    ++j;
                    if (insertElement3 != null) {
                        newArray[j] = insertElement3;
                        ++j;
                    }
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
///////////////////////////////////////////////////
function bubbleSort(array, conditionFunction) {
    var tempArrayElement;
    for (var j = 0; j < array.length; ++j) {
        for (var i = 0; i < array.length - 1 - j; ++i) {
            if (conditionFunction(array[i], array[i + 1])) {
                tempArrayElement = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tempArrayElement;
            }
        }
    }
    return array;
}
//////////////////////////////////////////////////////function checks if first length is more than second in array of 2
function conditionsecondstring(firstElement, secondElement) {
    if (firstElement.length > secondElement.length) {
        return true;
    }
    return false;
}