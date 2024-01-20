// Object Methods Explanation
function objectMethods(obj) {
    console.log("Original Object:", obj);
  
    let keys = Object.keys(obj);
    console.log("After Object.keys():", keys);
  
    let values = Object.values(obj);
    console.log("After Object.values():", values);
  
    let keys = Object.keys(obj);
    console.log("After Object.keys():", keys);
  
    let values = Object.values(obj);
    console.log("After Object.values():", values);
  
    let entries = Object.entries(obj);
    console.log("After Object.entries():", entries);
  
    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():", hasProp);
  
    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("After Object.assign():", newObj);
  
  
  }
  
 