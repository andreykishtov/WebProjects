
var readlineSync = require('readline-sync');
var width = parseInt(readlineSync.question('Enter Width: '));
var length = parseInt(readlineSync.question('Enter Length: '));
//var width = readlineSync.question('Enter Width: ');
//var length = readlineSync.question('Enter Length: ');

if(isNaN(width) || isNaN(length))
{   
    console.log(typeof(width));
    console.log("Please enter only numbers next time");
}
else
{  
    if(width>length)
    {
        var temp=length;
        length=width;
        width=temp;
    }
    console.log('Width is: '+width);
    console.log("Length is: "+length);
    console.log("perimeter is: "+2*(width+length));
    console.log("Area is: "+ width*length);
}