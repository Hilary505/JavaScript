function addWeek(dates) {
    const date = [
        'Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday','Sunday',
        'secondMonday', 'secondTuesday','secondWednesday', 'secondThursday','secondFriday','secondSaturday','secondSunday'
    ]
    
    const epoch = new Date('0001-01-01');

    const  timeDiff =  Math.abs(dates.getTime() - epoch.getTime());

    const  dayDiff =  Math.floor(timeDiff/(1000 * 60 * 60 * 24));

    const  weekDay = (dayDiff % 14);

    return  date[weekDay]

}


function  timeTravel({date,hour,minute,second}) {
    const newDate = new Date(date);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);
return newDate;
}
