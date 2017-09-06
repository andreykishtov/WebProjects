var db = require('./db');

function getJob(callback) {
    var query = `Select job.id, job.title, job.description ,job.publish_date, user.first_name, user.last_name, location.location from job
    join user on job.publisher_id = user.user_id 
    join location on location.id = job.location_id;`

    db.query(query, function(err, sendresult, fields) {
        if (err) throw err;
        callback(sendresult);
    });
}

function getSkillsByJobId(callback, id) {
    var query = `SELECT skills.title FROM job_skills
    join skills on skills.id=job_skills.skill_id
    where job_id= ${id}`

    db.query(query, function(err, sendresult, fields) {
        if (err) throw err;
        callback(sendresult);
    });
}

function getSkillsforJobs(callback) {
    var query = `SELECT skills.title, job.id as job_id FROM job_skills
    join skills on skills.id=job_skills.skill_id
    join job on job.id=job_skills.job_id
    order by job.id;`

    db.query(query, function(err, sendresult, fields) {
        if (err) throw err;
        callback(sendresult);
    });
}



module.exports = { getJob, getSkillsByJobId,getSkillsforJobs };








//insert into job_applicant values (2,2)


// function addJob(product) {
//     var send = `INSERT INTO job() VALUES
//     (` + product.id + "," + product.categories_id + ',"' + product.name + '","' + product.price + '","' + product.image + '",' + product.sku + ');'
//     db.query(send, function(err) {
//         if (err) throw err;
//     });
// };

