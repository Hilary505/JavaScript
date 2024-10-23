function firstDayWeek(week, year) {
    const inputYear = parseInt(year, 10);
    const janFirst = new Date();
    janFirst.setFullYear(inputYear, 0, 1); // Explicitly set the full year
    const janFirstDay = janFirst.getDay();
    const dayOffset = (janFirstDay === 0 ? -6 : 1 - janFirstDay);
    const firstDayofWeek = new Date();
    firstDayofWeek.setFullYear(inputYear, 0, 1 + dayOffset + 7 * (week - 1));

    if (firstDayofWeek.getFullYear() < inputYear) {
        firstDayofWeek.setFullYear(inputYear);
        firstDayofWeek.setMonth(0);
        firstDayofWeek.setDate(1);
    }

    const day = String(firstDayofWeek.getDate()).padStart(2, '0');
    const month = String(firstDayofWeek.getMonth() + 1).padStart(2, '0');
    const formattedYear =  String(firstDayofWeek.getFullYear()).padStart(4, '0');

    return `${day}-${month}-${formattedYear}`;
}
console.log(firstDayWeek(23, '1000'))