const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('conversion_courses', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;