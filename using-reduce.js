/* function adder that accepts an array of numbers and returns the sum as numbers */
function adder(arr, initialsum = 0) {
    return arr.reduce((sum,num) => sum + num, initialsum)
}

console.log(adder([9, 24, 7, 11, 3], 10))

/* function that accepts an array of numbers and adds or multiplies its elements depending on whether the element is odd or even. Even = multiply. Odd = add */
function  sumOrMul(arr,initial = 0) {
    return arr.reduce((result, num) => {
        if(num % 2 === 0) {
            return result * num 
        }else{
            return result + num
        }
    },initial)
}
console.log(sumOrMul([1, 2, 3, 5, 8], 5))

/* function accepts an array of functions and executes them using reduce, returning the result */
function funcExec(funcs,initial) {
    return funcs.reduce((acc, func) => func(acc),initial)
  }