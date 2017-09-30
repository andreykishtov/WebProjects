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
            .then(jobs => jobs.find({}, { applicants: 0 }).toArray())
            .then(jobs => {
                database.close();
                return jobs;
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
            .then(jobs => jobs.find({ publisher: req.params.email }).toArray())
            .then(job => {
                database.close();
                return job;
            })
            .catch(err => console.log(err));
    },
    createJob(req) {
        let database;
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs =>
                jobs.insertOne({
                    title: req.body.title,
                    publisher: req.body.email,
                    publishedDate: new Date(),
                    skills: req.body.skill || [],
                    applicants: [],
                    description: req.body.description || '',
                    location: {
                        lat: req.body.location.lat || '',
                        lng: req.body.location.lng || ''
                    }
                })
            )
            .then(result => {
                database.close();
                return result;
            })
            .catch(err => res.status(403).json({ error: err }));
    },
    findJob(req) {
        let database;
        MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs => jobs.findOne(ObjectId(req.params.id)))
            .catch(err => console.log(err));
    },
    deleteJob(req) {
        let database;
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs => jobs.remove({ _id: ObjectId(req.params.id) }))
            .then(job => {
                database.close();
                return job;
            })
            .catch(err => console.log(err));
    },
    applyToJob(req) {
        let database;
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs =>
                jobs.update(
                    { _id: ObjectId(req.body.job_id) },
                    {
                        $addToSet: {
                            applicants: req.body.applicant_id
                        }
                    }
                )
            )
            .then(job => {
                database.close();
                return job;
            })
            .catch(err => console.log(err));
    },
    unApplyToJob(req) {
        let database;
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs =>
                jobs.update(
                    { _id: ObjectId(req.body.job_id) },
                    {
                        $pull: {
                            applicants: req.body.applicant_id
                        }
                    }
                )
            )
            .then(job => {
                database.close();
                return job;
            })
            .catch(err => console.log(err));
    },
    findJobByApplicant(req) {
        let database;
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs => jobs.find({ applicants: '' + req.params.id }).toArray())
            .then(jobs => {
                database.close();
                return jobs;
            })
            .catch(err => console.log(err));
    }
};
