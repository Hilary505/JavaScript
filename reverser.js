function reverse(input) {
    // Check if input is an array
    if (Array.isArray(input)) {
        const reversedArray = [];
        for (let i = input.length - 1; i >= 0; i--) {
            reversedArray.push(input[i]);
        }
        return reversedArray;
    } 
    // Check if input is a string
    else if (typeof input === 'string') {
        let reversedString = '';
        for (let i = input.length - 1; i >= 0; i--) {
            reversedString += input[i];
        }
        return reversedString;
    } 
    // If input is neither an array nor a string, return null or handle error
    else {
        return null; 
    }
}