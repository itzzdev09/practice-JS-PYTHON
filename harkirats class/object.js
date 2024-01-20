// Object Methods Explanation
function objectMethods(obj) {
    console.log("Original Object:", obj);
  
    console.log("After Object.keys():", Object.keys(obj));
  
    console.log("After Object.values():", Object.values(obj));
  
    let keys = Object.keys(obj);
    console.log("After Object.keys():", Object.keys(obj));
  
    let values = Object.values(obj);
    console.log("After Object.values():", Object.values(obj));
  
    let entries = Object.entries(obj);
    console.log("After Object.entries():", entries);
  
    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():", hasProp);
  
    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("After Object.assign():", newObj);
  
  
  }
   // Example Usage for Object Methods
   const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  objectMethods(sampleObject);
 