const bcrypt = require('bcrypt');
const userService = require('../services/user.services')

exports.GetAllUser = async (req, res) => {
    try {
        const users = await userService.getAllUser()
        res.status(200).json({users: users})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.GetUser = async (req, res) => {
    try{
        const user = await userService.GetByUserName(req.params.username)
        res.status(200).json({"user": user})
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}