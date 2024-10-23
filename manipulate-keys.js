/* a function that works like a .filter   */ 
function  filterKeys(obj, callback) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => callback(key)));
}

/* a function  that works like a .map  */  
function mapKeys(obj, callback) {
    return Object.fromEntries(Object.entries(obj).map(([key,value]) => [callback(key),value]))
}

/* a function that works like a .reduce */ 
function reduceKeys(obj, callback, initialValue) {
    return Object.keys(obj).reduce((acc, key, index) => {
      // If the accumulator is empty, return the key without prepending a comma
      if (index === 0 &&(initialValue === null || initialValue === undefined)) {
        return key;
      }
      return callback(acc, key);
    }, initialValue || 0);
  }