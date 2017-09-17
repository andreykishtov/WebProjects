const express = require('express');
const router = express.Router();

const JobController = require('../controllers/jobs');

router
    .route('/')
    .post(JobController.createJob)
    .get(JobController.getJobs);
router.route('/apply').post(JobController.applyToJob);
router.route('/:email').get(JobController.findJobsByEmail);
router.route('/:id').get(JobController.findJob);
router.route('/applicant/:id').get(JobController.findJobByApplicant);
// router.route('/applicants/:id').get(JobController.findApplicantsJobById);
module.exports = router;
