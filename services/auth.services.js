const userService = require('./user.services')
const {jwt, passwordUtil} = require('../utils/index')


exports.signup = async (username, password) => {
    try {
        const hashPassword = await passwordUtil.hashPassword(password)
        await userService.create(username, hashPassword)
        return true
    } catch (err) {
        console.error('Error creating user :', err)
        throw new Error(err)
    }
}

exports.login = async (username, password) => {
    try {
        const user = await userService.getByUserName(username)
        if (!user) {
            throw new Error('user not found')
        }
        const isHash = await passwordUtil.checkHashPassword(password, user.password)
        if (!isHash) {
            throw new Error('wrong password')
        }
        const token = jwt.createToken(username)
        return token
    } catch (err) {
        console.error('Login error:', err.message)
        throw err
    }
}