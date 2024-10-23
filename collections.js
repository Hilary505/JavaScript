// Function to convert an array to a set
function arrToSet(arr) {
    return new Set(arr);
  }
  
  // Function to convert an array to a string
  function arrToStr(arr) {
    return arr.join('');
  }
  
  // Function to convert a set to an array
  function setToArr(set) {
    return Array.from(set);
  }
  
  // Function to convert a set to a string
  function setToStr(set) {
    return Array.from(set).join('');
  }
  
  // Function to convert a string to an array
  function strToArr(str) {
    return str.split('');
  }
  
  // Function to convert a string to a set
  function strToSet(str) {
    return new Set(str.split(''));
  }
  
  // Function to convert a map to an object
  function mapToObj(map) {
    const Obj = {};
    for (const [key, value] of map) {
      Obj[key] = value;
    }
    return Obj;
  }
  
  // Function to convert an object to an array
  function objToArr(obj) {
    return Object.values(obj);
  }
  
  // Function to convert an object to a map
  function objToMap(obj) {
    return new Map(Object.entries(obj));
  }
  
  // Function to convert an array to an object
  function arrToObj(arr) {
    return arr.reduce((acc, val, index) => ({ ...acc, [index]: val }), {});
  }
  
  // Function to convert a string to an object
  function strToObj(str) {
    return strToArr(str).reduce((acc, val, index) => ({ ...acc, [index]: val }), {});
  }
  
  function superTypeOf(value) {
    if (value instanceof Set) {
        return 'Set';
    } else if (value instanceof Map) {
        return 'Map';
    } else if (Array.isArray(value)) {
        return 'Array';
    } else if (value === null) {
        return 'null'; // Handle null specifically
    } else if (value === undefined) {
        return 'undefined'; // Handle undefined specifically
    } else if (typeof value === 'object') {
        return 'Object';
    } else {
        const type = typeof value;
        return type.charAt(0).toUpperCase() + type.slice(1); // Capitalize the first letter
    }
}
