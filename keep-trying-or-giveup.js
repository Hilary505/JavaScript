/* function retry that invokes the callback  */ 
const retry = (count, callback) => {
    let attempts = 1;
    const _retry = async(...args) => callback(...args)
    .catch(err => {
      if(attempts > count) throw err 
      attempts++
      return _retry(...args)
    })
    return _retry
}

const timeout = (delay, callback) => {
    return (...args) => new Promise((resolve, reject) => {
      // Set a timer that rejects with 'timeout' if delay is exceeded
      const timer = setTimeout(() => {
        reject(new Error('timeout'));  
      }, delay);
  
      // Call the callback
      callback(...args)
        .then((result) => {
          clearTimeout(timer);  
          resolve(result);      
        })
        .catch((err) => {
          clearTimeout(timer);  
          reject(err);          
        });
    });
  };