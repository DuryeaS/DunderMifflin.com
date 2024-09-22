const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the current directory (since your HTML files are in the same directory as server.js)
app.use(express.static(__dirname));  // No "public" folder needed since your HTML files are here

// Serve index.html for the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');  // Serve the main landing page
});

// Handle the login POST request
const validUsername = "michael.scott@dundermifflin.com";
const validPassword = "RabiesAwarenessRun2021#!";

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === validUsername && password === validPassword) {
        res.redirect('/thats_what_she_said.html');
    } else {
        res.send('Incorrect username or password.');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
