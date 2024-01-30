function fetchData() {
    return new Promise(resolve => {
      setTimeout(function() {
        const data = 'Fetched data';
        resolve(data);
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  async function processData() {
    const data = await fetchData();
    console.log('Processing data:', data);
  }
  
  processData();


// Async/Await function to simulate data fetching
function fetchData() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      const data = 'Fetched data';
      resolve(data);
    }, 2000); // Simulating a delay of 2 seconds
  });
}

// Async/Await usage
async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log('Async/Await Example - Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Calling the async function
fetchDataAsync();
