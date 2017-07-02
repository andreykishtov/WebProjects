test();

function test() {
    var brainFuckFromUser = "> +-+++++< [ > ++++++++++ < - ] > +++++ .";
    var inputCode = createRunProgram(brainFuckFromUser);
    programToRun(inputCode);
}
///////////////////////////////Creates Program To Run
///////////////////////////////////////////////////////////////////////////////////
function createRunProgram(inputString) {
    var outputArray = {};
    var j = 0;
    for (var i = 0; i < inputString.length; ++i) {
        switch (inputString[i]) {
            case "<":
                outputArray[j++] = {
                    "<": function () {
                        this.arrow--;
                    }
                };
                break;
            case ">":
                outputArray[j++] = {
                    ">": function () {
                        this.arrow++;
                        if (this.data[this.arrow] == undefined) {
                            this.data[this.arrow] = 0;
                        }
                    }
                };
                break;
            case "+":
                outputArray[j++] = {
                    "+": function () {
                        this.counter--;
                        this.data[this.arrow]++;
                    }
                };
                break;
            case "-":
                outputArray[j++] = {
                    "-": function () {
                        this.counter++;
                        this.data[this.arrow]--;
                    }
                };
                break;
            case ".":
                outputArray[j++] = {
                    ".": function (string) {
                        console.log(data);
                    }
                };
                break;
            case "[":
                outputArray[j++] = {
                    "[": function () {

                    }
                };
                break;
            case "]":
                outputArray[j++] = {
                    "]": function () {

                    }
                };
                break;
            case " ":
                break;
        }
    }
    return outputArray;


}

function programToRun(outputArray) {
    var g = [];
    var f = [];
    var counter = 0;
    var arrow = 0;
    var data = [];
    for (var a in outputArray) {
        g[a] = Object.keys(outputArray[a]);
        f[a] = outputArray[a][g[a][0]].bind(outputArray);
        f[a]();
        console.log(data[a]);
    }
}