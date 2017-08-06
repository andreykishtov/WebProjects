var fs = require('fs');
var db = require('./index.js');
var path = require('path');
module.exports = function() {
    db.query("select * from categories", function(err, result, fields) {
        if (err) throw err;
        var result = "var categories = " + JSON.stringify(result);
        //console.log(result);
        fs.writeFile(path.join(__dirname, '../view/js/categories.js'), result, "utf8", function(err, data) {
            if (err) {
                return console.log(err);
            }
        })
    });
}