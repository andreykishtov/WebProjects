var express = require('express');
var router = express.Router();
const job = require('../database/job');
/* GET users listing. */
router.get('/jobs', getJobs);
router.get('/skills/:id', getSkills);

function getJobs(req, res, next) {
    function getJobFromDB(whatToGet) {
        res.json(whatToGet);
    }
    job.getJob(getJobFromDB);
}

function getSkills(req, res, next) {
    function getSkillsFromServer(whatToGet) {
        res.json(whatToGet);
    }
    job.getSkillsByJobId(getSkillsFromServer, req.params.id);
}
module.exports = router;