/*function named replica that allows one to deep assign the values of all properties from one or more objects to a target object */
function replica(target, ...sources) {
    for (const source of sources) {
        if (typeof source !== 'object' || source === null) {
            continue; 
        }
        // Iterate over the properties of the source object
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                const sourceValue = source[key];

                if (typeof sourceValue === 'function') {
                    target[key] = sourceValue; 
                } else if (sourceValue instanceof RegExp) {
                    target[key] = new RegExp(sourceValue); 
                } else if (Array.isArray(sourceValue)) {
                    target[key] = sourceValue.slice(); 
                } else if (typeof sourceValue === 'object') {
                    if (Array.isArray(target[key])) {
                        target[key] = {}; 
                    } else if (typeof target[key] !== 'object' || target[key] === null) {
                        target[key] = {};
                    }
                    // Recursively clone the object/array
                    target[key] = replica(target[key], sourceValue);
                } else {
                    target[key] = sourceValue;
                }
            }
        }
    }
    return target; 
}
