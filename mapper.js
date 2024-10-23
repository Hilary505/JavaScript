/* map function that takes an array as the first argument, a function as second, and that works like the method .map */
function map(array, callback) {
    if (!Array.isArray(array) || typeof callback !== 'function') {
        throw new TypeError('Invalid arguments: first argument must be an array and second must be a function');
    }
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result; 
}

/* flatMap function that takes an array as the first argument, a function as second, and that works like the method .flatMap */
function flat(array, depth = 1) {
    const result = [];

    (function flatten(arr, d) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && d > 0) {
                flatten(arr[i], d - 1); 
            } else {
                result.push(arr[i]); 
            }
        }
    })(array, depth);

    return result; // Return the flattened array
}

function flatMap(array, callback) {
    // First, map over the array and then flatten the result
    const mapped = map(array, callback);
    return flat(mapped); // Flatten the mapped array (default depth is 1)
}
