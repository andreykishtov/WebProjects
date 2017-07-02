
console.log(brainfuck("++++++ [ > ++++++++++ < - ] > +++++ ."));

function brainfuck(source) {
  //  var code = source.replace(/[^-+<>.,[\]]/g, '').split('');  // program code
    var loop = [];  // stack of loops created by bracket operators
    var data = [];  // array of data cells stored by the program code
    var cell = 0;   // index in the data array representing one "cell" of data
    var next = 0;   // index in the code array of the next instruction to run 
   
   
    var operator = {
        '>': function () {
            if (~loop[0]) {
                ++cell;
            }
        },
        '<': function () {
            if (~loop[0]) {
                --cell;
            }
        },
        '+': function () {
            if (~loop[0]) {
                data[cell] = (data[cell] || 0) + 1;
            }
        },
        '-': function () {
            if (~loop[0]) {
                data[cell] = (data[cell] || 0) - 1;
            }
        },
        '.': function () {
            if (~loop[0]) {
                brainfuck.write(data[cell]);
            }
        },
        '[': function () {
            loop.unshift(data[cell] ? next : -1);
        },
        ']': function () {
            if (~loop[0] && data[cell]) {
                next = loop[0];
            } else {
                loop.shift();
            }
        }
    };






/*
    while (next < code.length) {
        operation[code[next++]]();
    }

    if (brainfuck.end) {
        brainfuck.end();
    }
}
*/