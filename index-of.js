function indexOf(array, value, fromIndex = 0) {
    // Adjust fromIndex if it's negative
    if (fromIndex < 0) {
        fromIndex = Math.max(0, array.length + fromIndex);
    }
    // Loop through the array starting from fromIndex
    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === value) {
            return i; 
        }
    }
    return -1;
}

function lastIndexOf(array, value, fromIndex = array.length - 1) {
    // Adjust fromIndex if it's negative
    if (fromIndex < 0) {
        fromIndex = Math.max(0, array.length + fromIndex);
    }
    // Loop backwards through the array starting from fromIndex
    for (let i = fromIndex; i >= 0; i--) {
        if (array[i] === value) {
            return i; 
        }
    }
    return -1; 
}

function includes(array, value) {
    // Loop through the array to check if value exists
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true; // Value found
        }
    }
    return false; 
}