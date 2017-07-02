
var ar=[88,88,9];
var countup=0;
var countdown=0;
var notgood;
for(var i=0;i<ar.length-1;++i)
{
    if(isNaN(ar[i]) || isNaN(ar[i+i]))
    {
        notgood=true;
        break;
    }
    else if(ar[i]<=ar[i+1])
    {
        countup++;
    }
    else if(ar[i]>=ar[i+1])
    {
        countdown++;
    }
}

if(notgood)
{
    console.log("Array Is Wrong!");
}
else if(countup == ar.length-1)
{
    console.log("All Integers Go Up");
}
else if (countdown == ar.length-1)
{
        console.log("All Integers Go Down");
}
else
{
        console.log("All Integers Are Spread");
}