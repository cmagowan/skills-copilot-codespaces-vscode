// Create web server
// Create web server
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
console.log(`server is running on port ${port}`);

// Set up the server
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up the routes
app.get('/api/comments', (req, res) => {
    res.send('Hello, world!');
});

app.post('/api/comments', (req, res) => {
    console.log(req.body);
    res.send('Comment received');
});

// Start the server
app.listen(port);