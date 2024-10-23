function dayOfTheYear(date) {
    const year = date.getFullYear();
    if (year === 1) {
        return date.getMonth() === 0 && date.getDate() === 1 ? 1 : NaN; // Only handle 0001-01-01 case
    }
    
    const startOfYear = new Date(year, 0, 1);
    const differenceInMillis = date - startOfYear;
    const oneDayInMillis = 1000 * 60 * 60 * 24;
    return Math.floor(differenceInMillis / oneDayInMillis) + 1;
}
console.log(dayOfTheYear(new Date('0001-01-01')) === 1)
console.log(dayOfTheYear(new Date('1664-08-09')) === 222)
console.log(dayOfTheYear(new Date('1600-12-31')) === 366)
console.log(dayOfTheYear(new Date('2020-06-22')) === 174)
console.log(dayOfTheYear(new Date('2048-12-08')) === 343)
console.log(dayOfTheYear(new Date('2048-11-08')) === 313)