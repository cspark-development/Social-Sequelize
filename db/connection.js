/*

Directions: 

    In db/connection.js, create a sequelize connection to a database.

*/

const path = require("path");
const { Sequelize } = require("sequelize")

const db = new Sequelize
({
	dialect: "sqlite",
	database: path.join(__dirname, "db.sqlite")
});


module.exports = {
    db,
}
