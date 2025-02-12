const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('conversion_courses', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;