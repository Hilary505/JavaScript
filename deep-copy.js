/* function named deepCopy that copies arrays and objects recursively */ 
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; 
    }
    // Handle special cases
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }

    if (typeof obj === 'function') {
        return obj;
    }
    // Create a new array or object based on the original type
    const copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}
