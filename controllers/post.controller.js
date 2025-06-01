const postService = require('../services/post.services')
const userService = require('../services/user.services')


exports.createPost = async (req, res) => {
    try {
        const {title} = req.body;
        const username = req.username
        await postService.create(title, username);
        res.status(200).json({message: "create success !"})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.getPostByUsername = async (req, res) => {
    try {
        const user = await userService.getByUserName(req.params.username);
        if (!user) {
            res.status(404).json({error: "username not found"})
        }
        const posts = await postService.findByUsername(req.params.username);
        res.status(200).json({posts: posts});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.getPost = async (req, res) => {
    try {
        const posts = await postService.findByUsername(req.username);
        res.status(200).json({posts: posts});
    } catch (error){
        res.status(500).json({error: error.message})
    }
}

exports.getAllPost = async (req, res) => {
    try {
        const posts = await postService.getAll();
        res.status(200).json({posts: posts});
    } catch (error){
        res.status(500).json({error: error.message})
    }
}
