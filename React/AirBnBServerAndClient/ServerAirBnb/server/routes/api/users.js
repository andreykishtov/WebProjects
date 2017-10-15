const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
// const router = express.Router();
const { validateBody, schemas } = require('../../helpers/routeHelpers');
const usersController = require('../../controllers/users');
const passportConf = require('../../passport');
router.route('/').post(usersController.addUser);
const passportSignIn = passport.authenticate('local', { session: false });
const passportJwt = passport.authenticate('jwt', { session: false });
//     .get(locationController.getLocations)
//     .put(() => false)
//     .delete(() => false);

router.route('/signUp').post(validateBody(schemas.authSchema), usersController.signUp);

router.route('/signIn').post(validateBody(schemas.authSchema), passportSignIn, usersController.signIn);

router.route('/secret').get(passportJwt, usersController.secret);

router.route('/:userId').get(usersController.getUser);

module.exports = router;
