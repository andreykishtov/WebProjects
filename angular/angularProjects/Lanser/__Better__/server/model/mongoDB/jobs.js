const { MongoClient, ObjectId } = require('mongodb');
const mongoDbUrl = require('../../helpers/db');

module.exports = {
    getJobs() {
        let database;
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs => {
                return jobs.find({}, { applicants: 0 }).toArray();
            })
            .then(jobs => {
                database.close();
                return jobs;
                // return res.status(200).json(jobs);
            })
            .catch(err => res.status(500));
    },
    findJobsByEmail(req) {
        let database;
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs => {
                // console.log(req.params.email);
                return jobs.find({ publisher: req.params.email }).toArray();
            })
            .then(job => {
                database.close();
                return job;
            })
            .catch(err => console.log(err));
    }
};
