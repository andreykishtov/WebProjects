const fs = require("fs");
//module.exports.textFile;
//module.exports.htmlFile;
var textFile;

fs.readFile('./test.txt', "utf8", function(err, data) {
    if (err) throw err;

    textFile = data;
});

// fs.readFile('./htmlfile.html', "utf8", (err, data) => {
//     if (err) throw err;
//     htmlFile = data;
// });

console.log(textFile);