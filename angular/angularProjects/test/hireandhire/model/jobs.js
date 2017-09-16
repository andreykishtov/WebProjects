const sqlConnection = require('./sqlConnection');

function getAllJobs(callback) {
    var queryString = `SELECT j.id, j.title, j.description, j.publish_date, u.first_name, u.last_name, l.name AS location
    FROM job AS j
    JOIN user AS u ON j.publisher_id = u.id
    JOIN location AS l ON j.location_id=l.id
    WHERE j.active = 1
    ORDER BY j.publish_date DESC`;
    sqlConnection.query(queryString, function (err, result, field) {
        if (err) {
            throw err;
        }
        callback(result);
    });
}

function applyByJobAndUserId(req, callback) {
    var queryString = `INSERT INTO job_applicant (job_id,applicant_id)
    VALUES (${req.body.job_id},${req.body.user_id})`;
    sqlConnection.query(queryString, function (err, result, field) {
        // if (err) {
        //     throw err;
        // }
        callback(result, err);
    });
}

function appliedJobsByUserId(applicantId, callback) {
    var queryString = `SELECT j.id, j.title, j.description, j.publish_date, u.first_name, u.last_name, l.name AS location FROM job_applicant AS ja
    JOIN job AS j ON ja.job_id = j.id
    JOIN user AS u ON j.publisher_id = u.id
    JOIN location AS l ON j.location_id=l.id
    WHERE ja.applicant_id = ${applicantId}
    ORDER BY j.publish_date DESC`;
    sqlConnection.query(queryString, function (err, result, field) {
        if (err) {
            throw err;
        }
        callback(result);
    });
}





function getJobById(jobId, callback) { // OLD
    var queryString = `SELECT j.title, j.description, j.publish_date, u.first_name, u.last_name, l.name AS location
    FROM job AS j
    JOIN user AS u ON j.publisher_id = u.id
    JOIN location AS l ON j.location_id=l.id
    WHERE j.id = ${jobId}`;
    sqlConnection.query(queryString, function (err, result, field) {
        if (err) {
            throw err;
        }
        callback(result);
    });
}

module.exports = {
    getJobById: getJobById,
    getAllJobs: getAllJobs,
    applyByJobAndUserId: applyByJobAndUserId,
    appliedJobsByUserId: appliedJobsByUserId
};

// `SELECT j.title, j.description, j.publish_date, u.first_name, u.last_name, l.name AS location
// FROM job AS j
// JOIN user AS u ON j.publisher_id = u.id
// JOIN location AS l ON j.location_id=l.id
// WHERE id = ${jobId}`

// SELECT j.title, j.description, j.publish_date, u.first_name, u.last_name, l.name AS location, sk.name
// FROM job AS j
// JOIN user AS u ON j.publisher_id = u.id
// JOIN location AS l ON j.location_id=l.id
// JOIN job_skill AS js ON js.job_id = j.id
// JOIN skill AS sk ON sk.id = js.skill_id
// WHERE j.active = 1
// ORDER BY j.publish_date DESCe