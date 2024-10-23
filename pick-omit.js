/* function pick contains only those keys which appear in the string or array of strings*/
function pick(obj, keys) {
  const keysArray = Array.isArray(keys) ? keys : [keys];
  return Object.keys(obj).filter(key => keysArray.includes(key) ).reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
}


/* function omit contains only those keys which do not match the string, or do not appear in the array of strings  */
function omit(obj, keys) {
    const keysArray = Array.isArray(keys) ? keys : [keys];
    return Object.keys(obj).filter(key => !keysArray.includes(key) ).reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
  }
  
  const obj1 = {a:1,b:2,c:4,d:8}

  const obj2 = ['e','c']

  const display = omit(obj1,obj2)

  console.log(display)