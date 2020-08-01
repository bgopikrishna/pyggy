const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'thealloyoflaw@gmail.com',
        pass: 'kyzymybpxxnktyks'
    }
});

const createMailOptions = (to, link) => ({
    from: 'thealloyoflaw@gmail.com',
    to,
    subject: 'Password Reset for Pyggy',
    html: `
    <p>Hi,</p> 
    <p>Here's is your password reset <a href="${link}">link</a> for Pyggy App.</p>
    <P>This link will expire in 1 hour.</p>
    <p>Regards,</p>
    <p>Team Pyggy.</p>`
});

module.exports = { transporter, createMailOptions };
