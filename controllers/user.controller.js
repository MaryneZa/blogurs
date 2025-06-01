const bcrypt = require('bcrypt');
const userService = require('../services/user.services')

exports.getAllUser = async (req, res) => {
    try {
        const users = await userService.getAllUser()
        res.status(200).json({users: users})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.getUser = async (req, res) => {
    try{
        const user = await userService.getByUserName(req.params.username)
        res.status(200).json({"user": user})
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}

exports.getMe = async (req, res) => {
    try{
        const user = await userService.getByUserName(req.username)
        res.status(200).json({"user": user})
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}