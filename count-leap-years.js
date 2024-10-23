// function count-leap-year  which accepts Date and return the number of leap year since year 1 
function countLeapYears(date) {
  let years = 0;
  for (let year = 1; year < date.getFullYear(); year++) {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
          years++;
      }
  }
  return years;
}


console.log(countLeapYears(new Date('0001-12-01')) === 0)
 console.log(countLeapYears(new Date('1664-08-09')))
 console.log(countLeapYears(new Date('2020-01-01')) === 489)
 console.log(countLeapYears(new Date('2048-12-08')) === 496)