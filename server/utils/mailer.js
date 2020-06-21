const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_KEY
    }
});

const createMailOptions = (to, link) => ({
    from: process.env.EMAIL_ID,
    to,
    subject: 'Password Reset for Pyggy',
    html: `
    <p>Hi,</p> 
    <p>Here's is your password reset link <a href="${link}"></a> for Pyggy App.</p>
    <P>This link will expire in 1 hour.</p>
    <p>Regards,</p>
    <p>Team Pyggy.</p>`
});

module.exports = { transporter, createMailOptions };
