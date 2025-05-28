var jwt = require('jsonwebtoken');

exports.CreateToken = (username) => {
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

exports.VerifyToken = (token) => {
    try {
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
        return decode
    } catch (err) {
        console.error('Error verify token:', err)
        throw err
    }
}