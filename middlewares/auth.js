import jwt from 'jsonwebtoken'

// eslint-disable-next-line consistent-return
const auth = (req, res, next) => {
    const token = req.header('x-authtoken')

    if (!token) return res.status(401).send('Access Denied')

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.user = decoded
        next()
    } catch (error) {
        res.status(400).send('Invalid Token')
    }
}

export default auth
