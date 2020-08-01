const WITHDRAW = 'withdraw';
const DEPOSIT = 'deposit';

const SITE_URL =
    process.env === 'developement'
        ? 'localhost:3000/'
        : '`https://pyggy.netlify.app/';

module.exports = { WITHDRAW, DEPOSIT, SITE_URL };
