/*

Directions: 

    In models/User.js, define a User model with the following properties:
        username: A string
        email: A string

*/
const { DataTypes } = require("sequelize");
const { db } = require("../db/connection");

const User = db.define("user", {
	username: DataTypes.STRING,
	email: DataTypes.STRING,
});

module.exports = User;
