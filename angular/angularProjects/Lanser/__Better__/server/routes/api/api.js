// var express = require('express');
// var router = express.Router();
// const job = require('../../querys/job-querys');

// /* GET users listing. */
// router.get('/jobs', getAllJob);
// router.get('/skills', getAllSkills);
// router.get('/skills/jobs', getSkillsforJobs);

// function getAllJob(req, res, next) {
//     job.getAllJob(function (whatToGet){
//         res.json(whatToGet);
//     });
// }

// function getSkillsforJobs(req, res, next) {
//     job.getSkillsforJobs(function(whatToGet) {
//         res.json(whatToGet);
//     });
// }

// function getAllSkills(req, res, next) {
//     job.getAllSkills(function(whatToGet) {
//         res.json(whatToGet);
//     });
// }

// module.exports = router;

// router.get('/skills/:id', getSkillsByJobId);

// function getSkillsByJobId(req, res, next) {
//     function getSkillsFromServer(whatToGet) {
//         res.json(whatToGet);
//     }
//     job.getSkillsByJobId(getSkillsFromServer, req.params.id);
// }