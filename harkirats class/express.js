//server.js
// Import the express module
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is the root/main route!');
});

