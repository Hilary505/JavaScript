/* function named invert which takes an object and returns a new one with its keys and values inverted  */
function invert(obj) {
    var retobj = {};
    for(var key in obj) {
        if (obj.hasOwnProperty(key)){
        retobj[obj[key]] = key;
    }
}
    return retobj;
}