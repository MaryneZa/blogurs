const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller') 

router.post("/create", postController.createPost)
router.get("/all-username/:username", postController.getPostByUsername)
router.get("/my-post", postController.getPost)
router.get("/all-post", postController.getAllPost)




module.exports = router