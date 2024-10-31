/*

Directions: 

    In models/Like.js, create a Like model with the following properties:
        reactionType: A string
        createdAt: A date formatted as a string

*/

const { DataTypes } = require("sequelize");
const { db } = require("../db/connection");

const Like = db.define("like", {
	reactionType: DataTypes.STRING,
	createdAt: DataTypes.STRING,
});

module.exports = Like;
