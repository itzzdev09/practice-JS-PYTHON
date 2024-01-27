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