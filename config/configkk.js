// config.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('zonicme-vas', 'nuelseyiadedoyin', '', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432, // Specify the port of your PostgreSQL server
  logging: true, // Set to true to see SQL logs during development
});

module.exports = sequelize;
