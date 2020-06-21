const jwt = require('jsonwebtoken');
const User = require('../models/User/user.model');

const auth = async (req, res, next) => {
    const token = req.header('X-Authtoken');

    if (!token) return res.status(401).send('Access Denied');

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const { id, iat } = decoded;
        const userFromDB = await User.findOne(id);

        const { lastPassUpdate } = userFromDB;

        if (new Date(iat) > new Date(lastPassUpdate)) {
            req.user = decoded;
            return next();
        }
        throw new Error('Invalid token, Password Recently Changed');
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
};

module.exports = auth;
