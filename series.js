/*  a function named series that takes an array of async functions and executes them in series and returns them inorder */
const  series = async(functions) => {
    const results = [];
    
    for (const fn of functions) {
      const result = await fn(); 
      // Collect the result in the results array
      results.push(result);       
    }
    
    return results;
  }