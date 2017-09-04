var db = require('./db');

function getJob(callback) {
    var query = `Select job.title, job.description ,job.publish_date, user.first_name, user.last_name, location.location from job
    join user on job.publisher_id = user.user_id 
    join location on location.id=job.location;`

    db.query(query, function(err, sendresult, fields) {
        if (err) throw err;
        callback(sendresult);
    });
}

//insert into job_applicant values (2,2)


// function addJob(product) {
//     var send = `INSERT INTO job() VALUES
//     (` + product.id + "," + product.categories_id + ',"' + product.name + '","' + product.price + '","' + product.image + '",' + product.sku + ');'
//     db.query(send, function(err) {
//         if (err) throw err;
//     });
// };



module.exports = getJob;