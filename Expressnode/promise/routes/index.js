var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/ajax1', function(req, res, next) {
    fs.readFile(path.join(__dirname, '../file/file1.json'), 'utf8', function(err, json) {
        if (err) { throw err; }
        res.send(JSON.parse(json));
    });
});

router.get('/ajax2', function(req, res, next) {
    fs.readFile(path.join(__dirname, '../file/file2.json'), 'utf8', function(err, json) {
        if (err) { throw err; }
        res.send(JSON.parse(json));
    });
});

router.get('/ajax3', function(req, res, next) {
    fs.readFile(path.join(__dirname, '../file/file3.json'), 'utf8', function(err, json) {
        if (err) { throw err; }
        res.send(JSON.parse(json));
    });
});


module.exports = router;


// router.get('/ajax', function(req, res, next) {
//     fs.readFile(path.join(__dirname, '../file/file1.json'), 'utf8', function(err, json) {
//         if (err) { throw err; }
//         var file1 = json;

//         fs.readFile(path.join(__dirname, '../file/file2.json'), 'utf8', function(err, json) {
//             console.log(file1)
//             if (err) { throw err; }
//             var file2 = json;
//             var response = {
//                 result: 'success',
//                 file1: file1,
//                 file2: file2,
//                 message: 'File uploaded!'
//             };
//             res.send(response)

//         });
//     });