var BF = function () {

    var memory = [];
    function memoryInit() {
    }

    function compileBF(programStr) {
        //
        var tempProg = [];
        // fill tempProg
        //this.Program = tempProg;
        return tempProg;
    }

    function runBF(compiledProg) {
        memoryInit();
        this.compileBF();
        // code to run

    }
    var funcs={};
    funcs.compileBF = compileBF;
    funcs.runBF =runBF;
    return funcs;
}

var myProg = "++++----<<<<[[+++]----<<<[++---]]";

var myBF = BF();
console.log(myBF);
var myBin = myBF.compileFunc(myProg);

//myBF.compileFunc(myProg);
//myBF.runBF();