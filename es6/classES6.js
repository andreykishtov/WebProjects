var funcsVar = [];

for (let i = 0; i < 5; i++) {
    funcsVar.push(function() {
        console.log('num:' + i);
    })
}


funcsVar[2]();