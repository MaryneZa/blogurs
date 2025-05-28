const bcrypt = require('bcrypt');

exports.HashPassword = async (password) => {
    try {
        const hashPassword = await bcrypt.hash(password, 10)
        return hashPassword
    } catch (err) {
        console.error('Error hashing password:', err)
        throw new Error('Failed to hash password')
    }
}

exports.CheckHashPassword = async (password, hash_password) => {
    try {
        const isHash = await bcrypt.compare(password, hash_password);
        return isHash
    } catch (err) {
        console.error('Error comparing password:', err)
        throw new Error('Failed to compare password')
    }
}