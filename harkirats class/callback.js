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