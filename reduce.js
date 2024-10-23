/* function that receives an array, a function and an accumulator, in this order, and applies the function in the elements of the array starting on the left */
function fold(arr,func,acc) {
    for(let i = 0; i < arr.length; i++) {
        acc = func(acc, arr[i])
    }
    return acc
}

/* function  that receives an array, a function and an accumulator, in this order, and applies the function in the elements of the array starting on the right */
function foldRight(arr,func,acc) {
  for(let i = arr.length-1; i >= 0; i--) {
    acc = func(acc, arr[i])
  }
  return acc
}

/* function that works just like the method [].reduce when you don't specify an accumulator. The arguments should be an array and a function. The starting value of your accumulator must be the first value of the array. If your array is less than 1 argument you should throw an error */
function reduce(arr,func) {
    if (arr.length < 1) {
        throw new Error('Array must have at least one element');
      }
      let accumulator = arr[0];
      for (let i = 1; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i]);
      }
      return accumulator;
}

/* function reduceRight like reduce, from the last value to the first */
function reduceRight(arr,func) {
    if (arr.length < 1) {
        throw new Error('Array must have at least one element');
      }
      let accumulator = arr[arr.length - 1];
      for (let i = arr.length - 2; i >= 0; i--) {
        accumulator = func(accumulator, arr[i]);
      }
      return accumulator;
}
