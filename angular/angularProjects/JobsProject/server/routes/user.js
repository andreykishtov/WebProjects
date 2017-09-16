const express = require('express');
const router = express.Router();
const encryption = require('../helpers/encryption');

const UserController = require('../controllers/users');

router.route('/').post(encryption.hashPassword, UserController.createUser);
router.route('/:email').get(UserController.findUser);

module.exports = router;
