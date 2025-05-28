const {jwt} = require('../utils/index')

function authMiddleware(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        res.status(401).json({ error: 'Access denied' });
    }
    try {
        const decode = jwt.VerifyToken(token)
        req.username = decode.username
        next()
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
}

module.exports= authMiddleware