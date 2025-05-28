const authService = require('../services/auth.service')


exports.SignUp = async (req, res) => {
    try {
        const {username, password} = req.body
        await authService.SignUp(username, password)
        res.status(200).json({message: "success"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.Login = async (req, res) => {
    try {
        const {username, password} = req.body
        const token = await authService.Login(username, password)
        res.status(200).json({message: "Login success !", token: token})
    } catch (error) {
        console.error('Signup error:', err);
        res.status(500).json({error: error.message})
    }
}
