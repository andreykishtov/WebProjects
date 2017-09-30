const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users');

router.route('/:email').get(UserController.findUser);
router.route('/id/:id').get(UserController.findUserById);
router.route('/').post(UserController.createUser);
router.route('/validate').post(UserController.validate);
router.route('/usersByIds').post(UserController.findUsersByIds);

module.exports = router;
