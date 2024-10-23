// Math.sign = undefined
function sign(n) {
    if (n > 0) {
        return 1
    }else if (n < 0) {
        return -1
    }
    return 0
}

function sameSign(a,b) {
    return(sign(a) === sign(b))
}