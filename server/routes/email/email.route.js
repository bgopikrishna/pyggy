const { Router } = require('express');
const {
    resetPassword,
    createPWResetToken
} = require('../../controllers/email.controller');

const router = Router();

router.post('/reset_password', createPWResetToken);
router.post('/change_password/:id/:token', resetPassword);

module.exports = router;
