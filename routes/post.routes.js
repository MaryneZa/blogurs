const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller') 

router.post("/create", postController.CreatePost)
router.get("/all-username/:username", postController.GetPostByUsername)

module.exports = router