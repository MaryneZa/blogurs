require('dotenv').config()
const app = require('./app')
const sequelize = require('./config/database')
const {User, Post} = require('./models') // this triggers the model definitions 

async function setup() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ alter: true });
        console.log('All models were synchronized successfully.');
        app.listen(process.env.PORT, () => console.log(`Server listening on Port : ${process.env.PORT}`))
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

setup();




