// functions that  work like _.debounce from lodash
function debounce(func, wait) {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  }

  const opDebounce= (fn, wait, option = { leading: false}) => {
    let timeout;
    let isLeadingInvoked = false;
    
    return function (...args) {
      const context = this;
      if(timeout){
        clearTimeout(timeout);
      }
      if(option.leading && !isLeadingInvoked){
        fn.apply(context, args);
        isLeadingInvoked = true;
      }
      timeout = setTimeout(() => {
        if (!option.leading || !isLeadingInvoked) {
          fn.apply(context, args);
        }
        isLeadingInvoked = false;
      }, wait);
    }
  }