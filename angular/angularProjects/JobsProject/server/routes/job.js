const express = require('express');
const router = express.Router();

const JobController = require('../controllers/job');

router.route('/').post(JobController.createJob);
router.route('/:id').get(JobController.findJob);

module.exports = router;
