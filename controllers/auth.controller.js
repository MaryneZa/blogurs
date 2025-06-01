const authService = require('../services/auth.services')


exports.signup = async (req, res) => {
    try {
        const { username, password } = req.body
        await authService.signup(username, password)
        res.status(200).json({ message: "success" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body
        const token = await authService.login(username, password)
        res.cookie("token", token, {
            maxAge: 60 * 60 * 1000,
            secure: true,
            httpOnly: true,
            sameSite: "lax",
        });
        res.status(200).json({ message: "Login success !" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.logout = async (req,res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "lax"
        })
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
