const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

router.get("/all", userController.GetAllUser)

router.get("/username/:username", userController.GetUser)

module.exports = router