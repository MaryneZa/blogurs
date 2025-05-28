const userService = require('../services/user.services')
const {jwt, passwordUtil} = require('../utils/index')


exports.SignUp = async (username, password) => {
    try {
        const hashPassword = await passwordUtil.HashPassword(password)
        await userService.Create(username, hashPassword)
        return true
    } catch (err) {
        console.error('Error creating user :', err)
        throw new Error(err)
    }
}

exports.Login = async (username, password) => {
    try {
        const user = await userService.GetByUserName(username)
        if (!user) {
            throw new Error('user not found')
        }
        const isHash = await passwordUtil.CheckHashPassword(password, user.password)
        if (!isHash) {
            throw new Error('wrong password')
        }
        const token = jwt.CreateToken(username)
        return token
    } catch (err) {
        console.error('Login error:', err.message)
        throw err
    }
}