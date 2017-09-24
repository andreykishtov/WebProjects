const { MongoClient, ObjectId } = require('mongodb');
const mongoDbUrl = require('../helpers/db');
const mongoDbQuery = require('../model/mongoDB/jobs');
module.exports = {
    getJobs: (req, res, next) => {
        mongoDbQuery.getJobs().then(function(jobs) {
            res.status(200).json(jobs);
        });
    },
    findJobsByEmail: (req, res, next) => 
    {
        if (!req.params.email) {
            return res.status(403).json({ error: 'job_id is mandatory' });
        }
        mongoDbQuery.findJobsByEmail().then(function(job) {
            job ? res.status(200).json(job) : res.status(404).json({ error: 'Job not found' });
        });
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
                console.log(req.body);
                let job = {
                    title: req.body.title,
                    publisher: req.body.email,
                    publishedDate: new Date(),
                    skills: req.body.skill,
                    applicants: [],
                    description: req.body.description || '',
                    location: {
                        lat: req.body.location.lat || '',
                        lng: req.body.location.lng || ''
                    }
                };
                if (req.body.skills) {
                    skills = req.body.skills;
                }

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
    deleteJob: (req, res, next) => {
        let database;
        MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs => {
                return jobs.remove({ _id: ObjectId(req.params.id) });
            })
            .then(job => {
                // console.log(job);
                database.close();
                res.status(200).json({ result: 'job Deleted' });
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
    },
    unApplyToJob: (req, res, next) => {
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
                console.log(jobs);
                return jobs.update(
                    { _id: ObjectId(req.body.job_id) },
                    {
                        $pull: {
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
    },
    findJobByApplicant: (req, res, next) => {
        let database;
        MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs => {
                return jobs.find({ applicants: '' + req.params.id }).toArray();
            })
            .then(jobs => {
                if (!jobs) {
                    return res.status(404).json({ error: 'jobs not found' });
                }
                database.close();
                res.status(200).json(jobs);
            })
            .catch(err => console.log(err));
    }
};
