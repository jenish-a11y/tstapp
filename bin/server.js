const express = require('express');
const path = require('path');
const config = require('./config'); // Import config.js

const app = express();
const port = config.port; // Use the port from the config file

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Advanced Node.js Server!');
});

app.get('/about', (req, res) => {
  res.send('This is a Node.js server built with Express.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

