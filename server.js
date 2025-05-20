require('dotenv').config()
const express = require('express')
const app = require('./app')
const sequelize = require('./config/database')
const PORT = process.env.PORT
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => `Server listening on Port : ${PORT}`)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();




