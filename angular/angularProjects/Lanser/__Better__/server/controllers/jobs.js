const mongoDbQuery = require('../model/mongoDB/jobs');
module.exports = {
    getJobs: (req, res, next) => {
        mongoDbQuery.getJobs().then(jobs => res.status(200).json(jobs));
    },
    findJobsByEmail: (req, res, next) => {
        if (!req.params.email) {
            return res.status(403).json({ error: 'job_id is mandatory' });
        }
        mongoDbQuery
            .findJobsByEmail(req)
            .then(job => (job ? res.status(200).json(job) : res.status(404).json({ error: 'Job not found' })));
    },
    createJob: (req, res, next) => {
        if (!req.body.title) {
            return res.status(403).json({ error: 'Title is mandatory' });
        }
        if (!req.body.email) {
            return res.status(403).json({ error: 'Publisher email is mandatory' });
        }
        if (!req.body.location) {
            req.body.location = {};
        }
        mongoDbQuery.createJob(req).then(result => {
            res.status(200).json({ successes: 'ok', jobID: result.insertedId });
        });
    },
    findJob: (req, res, next) => {
        mongoDbQuery
            .findJob(req)
            .then(job => (job ? res.status(200).json(job) : res.status(404).json({ error: 'Job not found' })));
    },
    deleteJob: (req, res, next) => {
        mongoDbQuery.deleteJob(req).then(result => res.status(200).json({ result: 'job Deleted' }));
    },
    applyToJob: (req, res, next) => {
        if (!req.body.job_id) {
            return res.status(403).json({ error: 'job_id is mandatory' });
        }
        if (!req.body.applicant_id) {
            return res.status(403).json({ error: 'applicant_id email is mandatory' });
        }
        mongoDbQuery.applyToJob(req).then(job => res.status(200).json(job));
    },
    unApplyToJob: (req, res, next) => {
        if (!req.body.job_id) {
            return res.status(403).json({ error: 'job_id is mandatory' });
        }
        if (!req.body.applicant_id) {
            return res.status(403).json({ error: 'applicant_id email is mandatory' });
        }
        mongoDbQuery.unApplyToJob(req).then(job => res.status(200).json(job));
    },
    findJobByApplicant: (req, res, next) => {
        mongoDbQuery
            .findJobByApplicant(req)
            .then(jobs => (jobs ? res.status(200).json(jobs) : res.status(404).json({ error: 'user Is not Applied' })));
    }
};
