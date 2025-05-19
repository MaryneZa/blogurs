const {DataTypes} = require('@sequelize/core')
const {sequelize} = require('../config/database')

const Post = sequelize.define("Post", {
    id: {
        type: DataTypes.UUID,
        PrimaryKey: true
    },
    Title: {
        type: DataTypes.STRING,
        AllowNull: false
    }
})

module.exports = Post