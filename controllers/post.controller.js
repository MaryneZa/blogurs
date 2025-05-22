const postService = require('../services/post.services')
const userService = require('../services/user.services')


exports.CreatePost = async (req, res) => {
    try {
        const {title, username} = req.body;
        await postService.Create(title, username);
        res.status(200).json({message: "create success !"})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.GetPostByUsername = async (req, res) => {
    try {
        const user = await userService.GetByUserName(req.params.username);
        if (!user) {
            res.status(404).json({error: "username not found"})
        }
        const posts = await postService.FindByUsername(req.params.username);
        res.status(200).json({posts: posts});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}