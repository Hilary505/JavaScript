// function that accepts a date and returns true if it is a Friday. 

const isFriday = (date) => date.getDay() % 6 === 5

const isWeekend = (date)  => date.getDay() % 6 === 0

function isLeapYear(date) {
    var year = new Date(date).getFullYear()
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
}

const isLastDayOfMonth = (date) => {
    var dy = new Date(date);
    return ( new Date(dy.getFullYear(), dy.getMonth() + 1,0).getDate() === dy.getDate())
}
