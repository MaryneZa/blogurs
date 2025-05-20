const {Sequelize} = require('@sequelize/core')
const { PostgresDialect } = require('@sequelize/postgres');
const config = require('./config.json').development;
const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: config.database,
  user: config.user,
  password: config.password,
  host: config.host,
  port: config.port,
  logging: console.log,
});

module.exports = sequelize