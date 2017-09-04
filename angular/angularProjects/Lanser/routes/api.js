var express = require('express');
var router = express.Router();
const job = require('../database/job');
/* GET users listing. */
router.get('/jobs', getJobs);

function getJobs(req, res, next) {
    function getJobFromDB(whatToGet) {
        res.json(whatToGet);
    }
    job(getJobFromDB);
}

module.exports = router;