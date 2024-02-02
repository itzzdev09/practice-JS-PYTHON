
// Without Promises
asyncOperation1((result1) => {
    asyncOperation2(result1, (result2) => {
      asyncOperation3(result2, (result3) => {
        // ...
      });
    });
  });
  
