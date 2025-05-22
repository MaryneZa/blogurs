const userService = require('../services/user.services')

exports.GetAllUser = async (req, res) => {
    try {
        const users = await userService.getAllUser()
        res.status(200).json({users: users})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.SignUp = async (req, res) => {
    try {
        const {username, password} = req.body
        await userService.Create(username, password)
        res.status(200).json({message: "success"})
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