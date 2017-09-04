const express = require('express');
const router = express.Router();
const job = require('../database/job');
/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/api', getJobs);

module.exports = router;



function getJobs(req, res, next) {
    function getJobFromDB(whatToGet) {
        res.json(whatToGet);
    }
    job(getJobFromDB);
}