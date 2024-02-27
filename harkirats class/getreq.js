const express = require('express');
const app = express();
const port = 3000;

// Define a simple GET route
app.get('/', (req, res) => {
    res.send('Hello, this is a GET request!');
  });
  
  // Define a route with a parameter
  app.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}!`);
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  


  // fetch
fetch('<https://api.example.com/data>')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data from server:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });


  // axios
  const axios = require('axios');

const url = '<https://api.example.com/resource>';
const token = 'your-access-token';

axios.get(url, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
