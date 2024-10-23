function isValid(date) {
    if (date instanceof Date) {
        // Check if it's a valid Date object
        return !isNaN(date);
    } else if (typeof date === 'number') {
        // Check if it's a valid timestamp
        return !isNaN(new Date(date).getTime());
    }
    return false;
}

function isAfter(date1, date2) {
    return date1 > date2
}

function isBefore(date1,date2) {
    return date2 > date1
}

function isFuture(date) {
    return date instanceof Date && !isNaN(date) && isAfter(date, new Date())
}

function isPast(date) {
    return date instanceof Date && !isNaN(date) && isBefore(date, new Date())
}

