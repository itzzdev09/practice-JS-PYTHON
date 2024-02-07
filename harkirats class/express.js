//server.js
// Import the express module
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is the root/main route!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'This is the API route.' });
  });
  app.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}!`);
  });
 