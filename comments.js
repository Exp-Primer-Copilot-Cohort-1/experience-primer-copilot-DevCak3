// Create web server application with express.js
// Run with node comments.js
// Access with browser http://localhost:8080/comments
// To stop press Ctrl+C

var express = require('express');
var app = express();

var comments = [
  { name: 'John', message: 'Hello' },
  { name: 'Mary', message: 'Hi, John' },
  { name: 'Sue', message: 'How are you?' }
];

app.get('/comments', function(req, res) {
  res.send(comments);
});

app.listen(8080);
console.log('Server is running on port 8080');
