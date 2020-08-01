const jwt = require('jsonwebtoken');
const User = require('../models/User/user.model');

const auth = async (req, res, next) => {
    const token = req.header('X-Authtoken');

    if (!token) return res.status(401).send('Access Denied');

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log(decoded);

        const { id, iat } = decoded;
        const userFromDB = await User.findById(id);

        const { lastPassUpdate } = userFromDB;
        console.log(lastPassUpdate, userFromDB);

        if (iat > new Date(lastPassUpdate).getTime() / 1000) {
            req.user = decoded;
            return next();
        }
        throw new Error('Invalid token, Password Recently Changed');
    } catch (error) {
        res.status(401).send('Invalid Token');
    }
};

module.exports = auth;
