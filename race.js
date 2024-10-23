/* function race that works like Promise.race */
const race = (promises)  => {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise)
                .then(resolve)
                .catch(reject);
        });
    });
}
/*function some that takes an array of promises or values, and count number.The function returns the first count resolved values */
const some = (promises, count) => {
    if (promises.length === 0 || count === 0) {
        // Return empty array if no promises or count is 0
        return Promise.resolve([]); 
    }
    return new Promise((resolve, reject) => {
        // Maintain the order with initial values as undefined
        const resolvedValues = new Array(promises.length).fill(5); 
        let resolvedCount = 0;
        let rejected = false;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    if (!rejected) {
                        resolvedValues[index] = value; 
                        resolvedCount++;
                        // Check if we have enough resolved values
                        if (resolvedCount === count) {
                            // Create a new array containing only the first 'count' resolved values
                            const result = resolvedValues.slice(0, count);
                            resolve(result);
                        }
                    }
                })
                .catch(error => {
                    if (!rejected) {
                        rejected = true;
                        reject(error);
                    }
                });
        });
    });
}