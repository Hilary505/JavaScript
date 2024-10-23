/* function which takes an array as the first argument, a function as the second argument, and that works like the Array.prototype.forEach method */
function forEach(array, callback) {
   
    if (!Array.isArray(array) || typeof callback !== 'function') {
        throw new TypeError('Invalid arguments: first argument must be an array and second must be a function');
    }

    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
