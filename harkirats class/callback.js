function fetchData(callback) {
    setTimeout(function() {
      const data = 'Fetched data';
      callback(data);
    }, 2000); // Simulating a delay of 2 seconds
  }
  
  function processData(data) {
    console.log('Processing data:', data);
  }
  
  fetchData(processData);



  function fetchData(callback) {
    setTimeout(function() {
      const data = 'Fetched data';
      callback(null, data);
    }, 2000); // Simulating a delay of 2 seconds
  }
  
  // Callback usage
  fetchData(function(error, data) {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Callback Example - Data:', data);
    }
  });