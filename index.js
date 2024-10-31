/*

Directions: 

    In db/connection.js, create a sequelize connection to a database.
    In models/User.js, define a User model with the following properties:
        username: A string
        email: A string
    In models/Profile.js, create a Profile model with the following properties:
        bio: A string
        profilePicture: A string
        birthday: A date formatted as a string
    In models/Post.js, create a Post model with the following properties:
        title: A string
        body: A string
        createdAt: A date formatted as a string
    In models/Comment.js, create a Comment
        body: A string
        createdAt: A date formatted as a string
    In models/Like.js, create a Like model with the following properties:
        reactionType: A string
        createdAt: A date formatted as a string
    In index.js, define the following associations:
        A User can have one Profile and vice versa.
        A User can have many Post instances, but a Post can only have one User.
        A Post can have many Comment instances, but a Comment can only have one Post.
        A User can have many Like instances and vice versa.
    Write unit tests to ensure that the connection works and the associations are set up correctly.
        Seed data has been created in the seed directory. Feel free to use this in your test creation!

*/

const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here
User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.hasMany(Like);
Like.hasMany(User);

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}
