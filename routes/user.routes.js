const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

router.get("/all", userController.getAllUser)

router.get("/username/:username", userController.getUser)

router.get("/me", userController.getMe)


module.exports = router