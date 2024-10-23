// const is = {}
is.num = (value) => typeof value === 'number';
is.nan = (value) => is.num(value) && isNaN(value); // Check for number and NaN specifically
is.str = (value) => typeof value === 'string';
is.bool = (value) => typeof value === 'boolean';
is.undef = (value) => typeof value === 'undefined';
is.def = (value) => typeof value !== 'undefined';  

is.arr = (value) => Array.isArray(value);
is.obj = (value) => typeof value === 'object' && !is.arr(value) && value !== null; // Check for object, not array, and not null
is.fun = (value) => typeof value === 'function';

// Truthy and Falsy checks
is.truthy = (value) => Boolean(value) === true;
is.falsy = (value) => Boolean(value) === false;
