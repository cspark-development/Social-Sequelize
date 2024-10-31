/*

Directions: 

    In models/Post.js, create a Post model with the following properties:
        title: A string
        body: A string
        createdAt: A date formatted as a string

*/
const { DataTypes } = require("sequelize");
const { db } = require("../db/connection");

const Post = db.define("post", {
	title: DataTypes.STRING,
	body: DataTypes.STRING,
	createdAt: DataTypes.STRING,
});

module.exports = Post;
