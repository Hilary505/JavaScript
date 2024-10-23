function flat(arr, depth = 1) {
    if (depth <= 0) {
      return arr;
    }
  
    return arr.reduce((acc, val) => {
      if (Array.isArray(val)) {
        return acc.concat(flat(val, depth - 1));
      } else {
        return acc.concat(val);
      }
    }, []);
  }