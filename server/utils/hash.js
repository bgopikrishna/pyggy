const { genSalt, hash } = require('bcrypt');

async function genHasedPass(password) {
    const salt = await genSalt(10);
    const hashed = await hash(password, salt);
    return hashed;
}

module.exports = genHasedPass;
