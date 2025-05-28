const {jwt} = require('../utils/index')

function authMiddleware(req, res, next) {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Access denied: No token provided' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decode = jwt.VerifyToken(token)
        req.username = decode.username
        next()
    } catch (error) {
        res.status(401).json({ error: 'Invalid token:' });
    }
}

module.exports= authMiddleware