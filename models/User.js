const {DataTypes} = require('@sequelize/core')
const sequelize = require('../config/database')

const User = sequelize.define('User', 
    {
    username: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, 
    {
    paranoid: true
    }
)

module.exports = User