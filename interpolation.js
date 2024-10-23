/* a function named interpolation that takes an object with 5 properties: step, start, end, callback and duration */
function interpolation({ step, start, end, callback, duration }) {
    const stepSize = (end - start) / step; 
    const delay = duration / step; 
    
    for (let i = 0; i < step; i++) {
        const x = start + i * stepSize; 
        const y = (i + 1) * delay;   
        
        // Use setTimeout to call the callback after the required delay
        setTimeout(() => {
            callback([x, y]);
        }, y);  
    }
}