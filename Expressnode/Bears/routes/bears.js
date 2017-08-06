var express = require('express');
var router = express.Router();
/* GET users listing. */
var newID = "1";
router.get('/', function(req, res, next) {
    res.json('my ID Is:' + newID);
});

router.get('/:bear_id', function(req, res, next) {
    res.json({ message: 'Get item:' + req.params.bear_id });
});

router.put('/', function(req, res) {
    res.json({ message: 'updated : ' + newID + " " + ++newID })
});

router.delete('/', function(req, res) {
    res
})



// create a bear (accessed at POST http://localhost:8080/api/bears)
router.post('/', function(req, res) {

    // var bear = new Bear(); // create a new instance of the Bear model
    // bear.name = req.body.name; // set the bears name (comes from the request)

    // save the bear and check for errors
    //  bear.save(function(err) {
    //    if (err)
    res.json({ message: 'Bear created!' + req.body.id });
    // res.send(req.body.id);
    // });

});


module.exports = router;