/* every element in the array respects the condition of the function */
function every(arr,func) {
    for(let i = 0; i < arr.length; i++) {
        if(!func(arr[i])) {
            return false
        }
    }
    return true
}

/*  function that returns true if at least one element in the array respects the condition of the function */
function some(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return true;
        }
    }
    return false;
}

/* function that returns true if none of the elements in the array respects the condition of the function */
function none(arr, fn) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return false;
        }
    }
    return true;
}