const express = require('express');
const router = express.Router();

const SkillController = require('../controllers/skills');

router.route('/').post(SkillController.createSkill);
router.route('/:id').get(SkillController.findSkill);

module.exports = router;
