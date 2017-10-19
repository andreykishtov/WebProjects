function jigsaw(str, firstLetter) {
    let newStr = '';
    for (let index = 0; index < str.length; index++) {
        let partOfString = str[index];
        if (firstLetter) {
            index % 2 ? (newStr += partOfString.toUpperCase()) : (newStr += partOfString.toLowerCase());
        } else {
            index % 2 ? (newStr += partOfString.toLowerCase()) : (newStr += partOfString.toUpperCase());
        }
    }
    return newStr;

    // result = +firstLetter ? letter.toUpperCase() :letter

    // firstLetter=!firstLetter;
}

//jigsaw('Hello',true) => 'HeLlO';
//jigsaw('Hello',false) => 'hElLo';

console.log(jigsaw('Hello', true));
