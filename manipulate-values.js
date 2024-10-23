/* a function that work like the .filter */  
function  filterValues(obj, callback){
return Object.fromEntries(Object.entries(obj).filter(([key, value]) => callback(value)));
}

/* a function that work like the .map  */
function  mapValues(obj,callback) {
    return Object.fromEntries(Object.entries(obj).map(([key,value]) => [key, callback(value)]))
}

/* function that work like the .reduce */
function reduceValues(obj,reduce,initialValue) {
   let acc = initialValue !== undefined ? initialValue : 0  
   for( const key in obj) {
    acc = reduce(acc, obj[key])
   }
   return acc
}