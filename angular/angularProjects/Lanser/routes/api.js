var express = require('express');
var router = express.Router();
const job = require('../database/job');
/* GET users listing. */
router.get('/jobs', getJobs);
router.get('/skills/:id', getSkills);
router.get('/skills', getSkillsforalljobs);

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

function getSkillsforalljobs(req, res, next) {
    function getSkillsJobFromServer(whatToGet) {
        res.json(whatToGet);
    }
    job.getSkillsforJobs(getSkillsJobFromServer);
}
module.exports = router;