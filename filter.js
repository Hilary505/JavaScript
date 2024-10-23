/* function that works like the [].filter method */
function filter(arr, func) {
    let result = []

    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i],i,arr)) {
            result.push(arr[i])
        }
    }
    return result
}

/* function  that works like the reject function from lodash */
function reject(arr, func) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        if(!func(arr[i],i,arr)) {
            result.push(arr[i])
        }
    }
    return result
}

/* function that that works like the partition function from lodash */
function partition(arr, func) {
    let pass = [];
    let fail = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            pass.push(arr[i]);
        } else {
            fail.push(arr[i]);
        }
    }
    return [pass, fail];
}