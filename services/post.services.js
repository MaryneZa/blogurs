const {Post} = require('../models')

exports.Create = (title, username) => Post.create({title: title, username: username});

exports.FindByUsername = (username) => Post.findAll({where: {username: username}, order: [['createdAt', 'DESC']],});