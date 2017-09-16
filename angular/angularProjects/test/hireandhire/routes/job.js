const express = require('express');
const router = express.Router();

const JobController = require('../controllers/jobs');

router.route('/').post(JobController.createJob);
router.route('/:id').get(JobController.findJob);

module.exports = router;
