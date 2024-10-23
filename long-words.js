/* function that returns true if every element of the array is a string with at least 5 characters */
 function longWords(arr) {
    return arr.every((element) => element.length >= 5)
 }
console.log(longWords(['hilary','annff']))

/* function that returns true if at least one element of the array is a string with 10 or more characters */
function oneLongWord(arr) {
    return arr.some((element) => element.length >= 10)
  }
  console.log(oneLongWord(['hilary','ribalkkkkk']))
  
 /* function that returns true if there are no elements in the array which is a string with at least 7 character */
 function noLongWords(arr){
   return arr.every((element)  => element.length < 7)
   }
   console.log(noLongWords(['hh','jj']))