function first(input) {
    // Convert string to array if input is a string
    const arrayInput = typeof input === 'string' ? Array.from(input) : input;
    return arrayInput.length > 0 ? arrayInput[0] : undefined; // Return the first element or undefined
}

function last(input) {
    // Convert string to array if input is a string
    const arrayInput = typeof input === 'string' ? Array.from(input) : input;
    return arrayInput.length > 0 ? arrayInput[arrayInput.length - 1] : undefined; // Return the last element or undefined
}

function kiss(input) {
    // Convert string to array if input is a string
    const arrayInput = typeof input === 'string' ? Array.from(input) : input;
    const firstElement = first(arrayInput);
    const lastElement = last(arrayInput);
    return [lastElement, firstElement]; // Return an array of last and first elements
}