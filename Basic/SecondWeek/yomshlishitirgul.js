/*var re1 =/^abc/;
var re2 =/abc/;



var str1 = "123abc";
var str2 = "abc123";

var test1=re1.exec(str1);
var test2=re1.exec(str2);

console.log(test1);
console.log(test2);*/

//var re3 =/a[x-z]c/g;
//var str3= "axcttt-abc---ab-bc-ayc-cba++axc*";
//var res =str3.match(re3);


console.log("test1");
//console.log(test2);


var re =/05\d-?\d{7,7}/;


var str="54545ssssa05-22324648212222wss21";
var res=str.match(re);
console.log(res);