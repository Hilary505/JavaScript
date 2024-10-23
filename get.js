function get(src, path) {
    const pathArray = path.split(".");
    let currentObject = src;
  
    for (let i = 0; i < pathArray.length; i++) {
      const key = pathArray[i];
      if (currentObject[key] === undefined) {
        return undefined; 
      }
      currentObject = currentObject[key];
    }
  
    return currentObject;
  }