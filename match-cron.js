//function that accepts string and  a valid date as arguments and returns true if the pattern matches

function  matchCron(str, date) {

const [strMin,strHour,strDayOfMonth,strMonth,strDayOfWeek] = str.split(' ');
// Get the date components
const min = date.getMinutes();
const hour = date.getHours();
const dayofmonth = date.getDate();
const month = date.getMonth() + 1;
const dayofweek = (date.getDay() === 0) ? 7 : date.getDay();

const  match = (strpart, value) => strpart === '*' || parseInt(strpart, 10) === value; 

return match(strMin, min) && match(strHour, hour) && match(strDayOfMonth, dayofmonth) && match(strMonth, month) && match(strDayOfWeek, dayofweek)

}
