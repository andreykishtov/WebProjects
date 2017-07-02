
test();
//////////////////////////Start func
function test() {
  var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var randomkeygenerated = sortarrayRandom(abc); //random key
  var stringtoencript = "helloworld";
  var encriptedstring = encrypt(stringtoencript, randomkeygenerated, abc)
  var decriptedstring = decript(encriptedstring, randomkeygenerated, abc)
  console.log("string that needed to be encripted: " + stringtoencript);
  console.log("encripted string is: " + encriptedstring);
  console.log("decripted string is: " + decriptedstring);
}
function createString(){

}

//////////////////////////// encrypt function
function encrypt(stringtoencript, encryptKey, abcstring) {
  var newstring = []; 
  for (var i = 0; i < stringtoencript.length; ++i) {
    newstring[i] = encryptKey[findletter(stringtoencript[i], abcstring)];
  }
  return addStringsTogether(newstring);
}
//////////////////////////decript function
function decript(stringtodecript, encryptKey, abcstring) {
  var newstring = [];
  for (var i = 0; i < stringtodecript.length; ++i) {
    newstring[i] = abcstring[findletter(stringtodecript[i], encryptKey)];
  }
  return addStringsTogether(newstring);
}
/////////////////////////////random arraysort
function sortarrayRandom(oldarray) {
  var i = 0;
  var j;
  var temp;
  var array = [];
  for (i = 0; i < oldarray.length; i++) {
    array[i] = oldarray[i];
  }
  for (i = 0; i < array.length - 1; ++i) {
    j = Math.floor(Math.random() * (i +x 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
//////////////////////////find letter
function findletter(letter, abc) {
  for (var i = 0; i < abc.length; ++i) {
    if (abc[i] == letter) {
      return i; //return number of letter from 0
    }
  }
}
//////////////////////////////////// makes a string whole
function addStringsTogether(arrayofstring) {
  var newstr = "";
  for (var i = 0; i < arrayofstring.length; ++i) {
    newstr += arrayofstring[i];
  }
  return newstr;
}