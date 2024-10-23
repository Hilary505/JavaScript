/*functions that works  like _.throttle from lodash */
function throttle(func, duration) {
    let shouldWait = false;
    return function (...args) {
        if(!shouldWait) {
            func.apply(this,args)
            shouldWait = true
            setTimeout(function () {
             shouldWait = false
            }, duration)
        }
    }
}


const opThrottle = (fn, wait, option = { leading: false }) => {
    let timeout;
     // Store the latest arguments to ensure they are applied correctly.
    let lastArgs;
    let isLeadingInvoked = false;
  
    return function (...args) {
      const context = this;
      lastArgs = args; 
      if (!timeout) {
        if (option.leading && !isLeadingInvoked) {
          // Leading edge invocation
          fn.apply(context, args);
          isLeadingInvoked = true;
        }
        timeout = setTimeout(() => {
          if (!option.leading || !isLeadingInvoked) {
            fn.apply(context, lastArgs);
          }
          // Reset for the next round
          timeout = null;
          isLeadingInvoked = false;
        }, wait);
      }
    };
  };
  