const { Post, User } = require('../models')

exports.create = (title, username) => Post.create({ title: title, username: username });

exports.findByUsername = (username) => Post.findAll({
  where: { username },
  include: [
    {
      model: User, // ✅ Use model instead of association
      attributes: { exclude: ['password'] },
    },
  ],
  order: [['createdAt', 'DESC']],
});

exports.getAll = () => Post.findAll({ order: [['createdAt', 'DESC']] });
