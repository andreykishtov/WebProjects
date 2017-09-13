const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users');

router.route('/').post(UserController.createUser);
router.route('/validate').post(UserController.validate);
router.route('/:email').get(UserController.findUser);

module.exports = router;
