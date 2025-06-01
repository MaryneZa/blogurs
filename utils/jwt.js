var jwt = require('jsonwebtoken');

exports.createToken = (username) => {
    try {
        const token = jwt.sign({
            username: username
        }, process.env.JWT_TOKEN, {expiresIn: '1h'})
        return token
    }catch (err) {
        console.error('Error creating token:', err.message)
        throw err
    }
}

exports.verifyToken = (token) => {
    try {
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
        return decode
    } catch (err) {
        console.error('Error verify token:', err)
        throw err
    }
}