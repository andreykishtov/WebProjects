const sqlConnection = require('./sqlConnection');

function getSkillsForAllJobs(callback) {
    var queryString = `SELECT s.name AS skill_name, s.id AS skill_id, j.id AS job_id
    FROM job_skill as js
    JOIN skill AS s ON js.skill_id=s.id
    JOIN job AS j ON js.job_id = j.id
    ORDER BY j.id`;
    sqlConnection.query(queryString, function (err, result, field) {
        if (err) {
            // throw err;
        }
        callback(result);
    });
}

function getAllSkills(callback) {
    var queryString = `SELECT * FROM skill`;
    sqlConnection.query(queryString, function (err, result, field) {
        if (err) {
            throw err;
        }
        callback(result);
    });
}

function getSkillByJobId(jobId, callback) { // OLD
    var queryString = `SELECT s.name FROM job_skill as js
    JOIN skill AS s ON js.skill_id=s.id
    WHERE job_id =  ${jobId}`;
    sqlConnection.query(queryString, function (err, result, field) {
        if (err) {
            throw err;
        }
        callback(result);
    });
}

module.exports = {
    getSkillByJobId: getSkillByJobId,
    getSkillsForAllJobs: getSkillsForAllJobs,
    getAllSkills: getAllSkills
};