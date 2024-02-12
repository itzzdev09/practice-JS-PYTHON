const express = require('express');
const app = express();
const port = 3000;

// Define a simple GET route
app.get('/', (req, res) => {
    res.send('Hello, this is a GET request!');
  });
  
