// Create web server
var express = require('express');
var app = express();
// Create a route for the home page
app.get('/', function(req, res) {
    res.send('Welcome to my blog');
});
// Create a route for the about page
app.get('/about', function(req, res) {
    res.send('About me');
});
// Create a route for the blog page
app.get('/blog', function(req, res) {
    res.send('My blog');
});
// Start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});