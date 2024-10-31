/*

Directions: 

    Write unit tests to ensure that the connection works and the associations are set up correctly.
        Seed data has been created in the seed directory. Feel free to use this in your test creation!

*/
const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');

describe('Social Sequelzie Test', () => {
	/**
	 * Runs the code prior to all tests
	 */
	beforeAll(async () => {
	    // the 'sync' method will create tables based on the model class
	    // by setting 'force:true' the tables are recreated each time the test suite is run
	    await db.sync({ force: true });
	})
	
	// Write your tests here
	
	test("replace with your test", function() {
	    expect(true).toBe(true);
	})
	
	
	
	
})
