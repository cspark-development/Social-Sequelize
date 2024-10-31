/*

Directions: 

    In models/Comment.js, create a Comment
        body: A string
        createdAt: A date formatted as a string

*/
const { DataTypes } = require("sequelize");
const { db } = require("../db/connection");

const Comment = db.define("comment", {
	body: DataTypes.STRING,
	createdAt: DataTypes.STRING,
});


module.exports = Comment;
