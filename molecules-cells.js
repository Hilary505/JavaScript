
function RNA(input) {
    let  result = ''
     for (let i = 0; i < input.length; i++){
    switch (input[i]) {
       case 'G':
        result += 'C'
        break;
        case 'C':
        result += 'G'
        break;
        case 'T':
        result += 'A'
        break
        case 'A':
        result += 'U'
        break
        default:
            return 'not valid DNA'
    }
}
    return result
}


function DNA(input) {
    let  result = ''
     for (let i = 0; i < input.length; i++){
    switch (input[i]) {
       case 'C':
        result += 'G'
        break;
        case 'G':
        result += 'C'
        break;
        case 'A':
        result += 'T'
        break
        case 'U':
        result += 'A'
        break
        default:
            return 'not valid RNA'
    }
}
    return result
}


