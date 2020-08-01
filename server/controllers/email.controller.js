const jwt = require('jsonwebtoken');
const genHasedPass = require('../utils/hash');
const { SITE_URL } = require('../utils/constants');
const User = require('../models/User/user.model');
const { transporter, createMailOptions } = require('../utils/mailer');

async function createPWResetToken(req, res) {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send({ message: 'Missing Email' });
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res
            .status(400)
            .send({ message: 'User not found with this Email' });
    }
    const token = user.generatePassResetToken();
    const resetLink = `${SITE_URL}account/change_password/${user._id}/${token}`;

    const mailOptions = createMailOptions(user.email, resetLink);
    try {
        const mail = await transporter.sendMail(mailOptions);
        if (mail) {
            return res.send({
                message: 'Password reset link has been sent to email address'
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Something went wrong' });
    }
}

async function resetPassword(req, res) {
    const { token, id } = req.params;
    let { newPassword } = req.body;

    try {
        const user = await User.findById(id);
        const { createdAt, password } = user;
        const secret = createdAt + password;
        const decodedToken = jwt.decode(token, secret);

        const { id: userId } = decodedToken;

        if (userId === id) {
            newPassword = await genHasedPass(newPassword);
            const updatedUser = await User.findByIdAndUpdate(id, {
                password: newPassword,
                lastPassUpdate: Date.now()
            });

            if (updatedUser) {
                return res.send({ message: 'Password Successfully Updated' });
            }
        }

        throw new Error('Error Updating the Password');
    } catch (error) {
        return res.status(400).send({ message: 'Error Updating the password' });
    }
}

module.exports = { createPWResetToken, resetPassword };
