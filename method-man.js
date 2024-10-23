
function yell(input) {
    return input.toUpperCase();
}

function whisper(input) {
    return  '*' + input.toLowerCase() + '*';
}

function sentence(input) {
    return input.join(' ');
}

function words(input) {
    return input.split(' ');
}

function  capitalize(input) {
    if (input.length === 0) return ' ' 
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}