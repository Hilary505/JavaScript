function slice(value, start, end) {
    if (typeof value !== 'string' && !Array.isArray(value)) {
      throw new TypeError('value must be a string or array');
    }
  
    const length = value.length;
    
    // Handle negative indices and ensure they stay within bounds
    start = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
    end = end === undefined ? length : (end < 0 ? Math.max(length + end, 0) : Math.min(end, length));
  
    // Ensure start is not greater than end
    if (start > end) {
      return typeof value === 'string' ? '' : [];
    }
  
    if (typeof value === 'string') {
      return value.substring(start, end);
    }
  
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(value[i]);
    }
  
    return result;
  }

 