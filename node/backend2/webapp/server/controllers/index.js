const createindexJson = require('../db/createIndexJson.js');
//const ioemit = require('../emit/index.js');
//const sendtocartemit = require('../emit/sendtocartemit.js');
//const deletefromcartemit = require('../emit/deletefromcartemit.js');
//const storagefromsql = require('../emit/storagefromsql.js');
const allemit = require('../emit/allemits.js');
var fs = require('fs');
const path = require('path');
/////////////////////////first time initializer////////////////////////
if (!fs.existsSync(path.join(__dirname, '/../view/js/categories.js'))) {
    createindexJson();
}

module.exports = {
    getIndex: function(req, res) {
        res.send('index.html');
    },
    getCart: function(req, res) {
        //ioemit(req.query.product);
        res.redirect('cart.html');
        //storagefromsql();
        //sendtocartemit();
        //deletefromcartemit();
        allemit();
        res.end();
    },
    getCartInfo: function(req, res) {
        console.log("works");
    }
}