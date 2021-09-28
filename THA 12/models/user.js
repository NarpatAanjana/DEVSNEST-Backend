
const {DataTypes} = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User',{       //tablename-> first letter capital
    fullName: {
        type: DataTypes.STRING,              // define schema
        allowNull : false
    },
    email:{
        type: DataTypes.STRING,
        allowNull : false
    },
    password: {
        type: DataTypes.STRING,
        allowNull : false
    }
});

module.exports = User;