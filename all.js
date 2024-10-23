/* a function named all that works like Promise.all but with objects  */
const all = (promisesObj)  => {
    const keys = Object.keys(promisesObj);  
    const resultObj = {};                
    let promisesResolved = 0;               
    const totalPromises = keys.length;     

    // Return a new promise
    return new Promise((resolve, reject) => {
        // Handle empty object case
        if (totalPromises === 0) {
            resolve({});
            return;
        }

        // Iterate over the object
        keys.forEach((key) => {
            const value = promisesObj[key];

            // Wrap non-promise values in a resolved promise
            Promise.resolve(value)
                .then((resolvedValue) => {
                    resultObj[key] = resolvedValue; 
                    promisesResolved++;            

                    // If all promises have resolved, resolve the final result
                    if (promisesResolved === totalPromises) {
                        resolve(resultObj);
                    }
                })
                .catch(reject); 
        });
    });
}
