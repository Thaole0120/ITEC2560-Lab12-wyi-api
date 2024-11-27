// Import the Express library to create the router
const express = require('express');
// Create a new instance of the router object
const router = express.Router();

// Import a function that returns a random "Would You Rather" question
const randomWYRQuestion = require('../model/wyr_questions');

// Define a GET route for the home page 
router.get('/', function(req, res, next) {
    // Send a placeholder message as a response for the home page
    res.send('Placeholder for home page');
});

// Define a route for the "Would You Rather" page (GET request to '/wyr')
router.get('/wyr', function(req, res, next) {
    // Example "Would You Rather" question (commented out in the code)
    // const wyr = {
    //     'question': 'Live in a circle house or a triangle house',
    //     'answer': 'Circle house',
    //     'answer2': 'Triangle house'
    // };

    // Get a random "Would You Rather" question from the model
    const wyr = randomWYRQuestion();  
    // Send the random question as a JSON response
    res.json(wyr);
});

// Export the router so it can be used in other parts of the application
module.exports = router;