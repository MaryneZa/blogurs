const {User} = require('../models')

exports.getAllUser = () => User.findAll({attributes: ['username']}); // attributes: { exclude: ['password'] },


exports.Create = (username, password) => User.create({username: username, password: password});

exports.GetByUserName = (username) => {
    const user = User.findByPk(username, {attributes: { exclude: ['password'] }})
    if (!user){
        return null;
    }
    return user
}





