const { MongoClient, ObjectId } = require('mongodb');
const mongoDbUrl = require('../helpers/db');

module.exports = {
    getJobs: (req, res, next) => {
        let database;
        MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs => {
                return jobs.find({}, { applicants: 0 }).toArray();
            })
            .then(jobs => {
                database.close();
                res.status(200).json(jobs);
            })
            .catch(err => console.log(err));
    },
    createJob: (req, res, next) => {
        if (!req.body.title) {
            throw res.status(403).json({ error: 'Title is mandatory' });
        }
        if (!req.body.email) {
            throw res.status(403).json({ error: 'Publisher email is mandatory' });
        }
        if (!req.body.location) {
            req.body.location = {};
        }
        let database;
        MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs => {
                let job = {
                    title: req.body.title,
                    publisher: req.body.email,
                    publishedDate: new Date(),
                    skills: [],
                    applicants: [],
                    description: req.body.description || '',
                    location: {
                        lat: req.body.location.lat || '',
                        lng: req.body.location.lng || ''
                    }
                };

                jobs.insertOne(job, function(err, result) {
                    if (err) throw err;
                    console.log('Job added');
                    database.close();
                    res.status(200).json({ successes: 'ok', jobID: result.insertedId });
                });
            })
            .catch(err => console.log(err));
    },
    findJob: (req, res, next) => {
        let database;
        MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs => {
                return jobs.findOne(ObjectId(req.params.id));
            })
            .then(job => {
                if (!job) {
                    return res.status(404).json({ error: 'Job not found' });
                }
                database.close();
                res.status(200).json(job);
            })
            .catch(err => console.log(err));
    },
    applyToJob: (req, res, next) => {
        //////////////////////
        if (!req.body.job_id) {
            throw res.status(403).json({ error: 'job_id is mandatory' });
        }
        if (!req.body.applicant_id) {
            throw res.status(403).json({ error: 'applicant_id email is mandatory' });
        }
        let database;
        MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs => {
                return jobs.update(
                    { _id: ObjectId(req.body.job_id) },
                    {
                        $addToSet: {
                            applicants: req.body.applicant_id
                        }
                    }
                );
            })
            .then(job => {
                console.log('Job added');
                database.close();
                res.status(200).json({ job });
            })
            .catch(err => console.log(err));
    }
};
