const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Course = sequelize.define('Course', {
    rank: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    university: {
        type: DataTypes.STRING,
        allowNull: false
    },
    course: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Course;