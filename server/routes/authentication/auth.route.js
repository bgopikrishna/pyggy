const { Router } = require('express');
const { signInUser } = require('../../controllers/auth.controller');
const { signUpUser } = require('../../controllers/auth.controller');

const router = Router();

router.post('/signin', signInUser);
router.post('/signup', signUpUser);

module.exports = router;
