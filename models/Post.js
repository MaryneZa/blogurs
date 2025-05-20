const {DataTypes} = require('@sequelize/core')
const sequelize = require('../config/database')

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // helpful for auto-generating UUIDs
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Post