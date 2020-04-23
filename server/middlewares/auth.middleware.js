const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('X-Authtoken');

    if (!token) return res.status(401).send('Access Denied');

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
};

module.exports = auth;
