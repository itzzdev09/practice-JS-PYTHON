function jsonMethods(jsonString) {
    console.log("Original JSON String:", jsonString);
  
    // Parsing JSON string to JavaScript object
    let parsedObject = JSON.parse(jsonString);
    console.log("After JSON.parse():", parsedObject);
