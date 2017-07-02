///////////////////////////////Creates Program To Run
///////////////////////////////////////////////////////////////////////////////////
var BF = function () {
    var memory = 0;
    var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    ///////////////////////////////////creates program
    function createRunProgram(inputString) {
        var outputArray = {
            "<": function () {
                memory--;
            },
            ">": function () {
                memory++;
            },
            "+": function () {
                this.data[this.memory]++;
            },
            "-": function () {
                --data[memory];
            },
            ".": function () {
                console.log(String.fromCharCode(data[memory]));
            },
            "[": function (index1, outputArray) {
                if (!data[memory]) {
                    return index1 = outputArray[index1].index;
                }
            },
            "]": function (index1, outputArray) {
                if (data[memory]) {
                    return index1 = outputArray[index1].index;
                }
            }
        };
        //{"stringName":function(),whereIsCloser:"number"};
        var stringofObjects = [];
        var stack = [];
        for (var i = 0; i < inputString.length; ++i) {
            stringofObjects[i] = {};
            stringofObjects[i].index = i; //adds string name
            if (inputString[i] == "[") {
                stack.push(i);
            }
            if (inputString[i] == "]") {
                var x = stack.pop();
                stringofObjects[i].index = x + 1;
                stringofObjects[x].index = i + 1;
            }
            stringofObjects[i][inputString[i]] = outputArray[inputString[i]].apply(BF);
        }
        return stringofObjects;
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////run program after compile
    function programToRun(outputArray, keystring) {
        var jump;
        for (var index = 0; index < outputArray.length;) {
            if (jump) {
                index = jump;
                jump = false;
            }

            jump = outputArray[index][keystring[index]](index, outputArray);
            index++;
        }
    }

    var funct = {};
    funct.createRunProgram = createRunProgram;
    funct.programToRun = programToRun;
    return funct;
}
//////////////////////////////////////////////////////
test(BF);
///////////////////////////////////test function has string and 2 function to run compile and run program
function test(BF) {
    var brainFuckFromUser = "++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.";
    var myBF = BF(); //functions from main program
    var arrayOfObjectsForRun = myBF.createRunProgram(brainFuckFromUser);
    myBF.programToRun(arrayOfObjectsForRun, brainFuckFromUser);
}