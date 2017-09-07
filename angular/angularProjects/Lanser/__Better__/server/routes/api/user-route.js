const express = require('express');
const router = express.Router();
const controller = require('../../controllers/user-controller');
/* GET users listing. */

// get one user
router.post('/', controller.createUser);

module.exports = router;
