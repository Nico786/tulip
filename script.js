const listTest = [0, 1, 240, 21, 10, 23, 31];

const displayGender = (list) =>{
    list.forEach( n => {
        if (n % 15 === 0) console.log(" GarçonFille ");
        else if (n % 3 === 0) console.log(" Garçon ");
        else if (n % 5 === 0) console.log(" Fille ");
        else console.log(n);
    });
}
displayGender(listTest);


const dateList = [new Date(2021, 3, 28, 18, 54), new Date(2021, 7, 4, 7, 5), new Date(2018, 5, 2, 3, 4)];

const showLastDayOfLastMonth = (date) => {
    const lastDayOfLastMonth = new Date(date).setDate(0);
    const lastDayOfLastMonthToStr = new Date(lastDayOfLastMonth).toLocaleDateString();
    return lastDayOfLastMonthToStr;
};

const setHoursAndMinutesToZero = (date) => {
    const dateNotReset = new Date(date);
    dateNotReset.setHours(0);
    const dateWithResetHoursMinutes = dateNotReset.setMinutes(0);
    return dateWithResetHoursMinutes;
};

const formatDate = (date) => {
    const dateNoFormat = new Date(date);
    const dateFormatted = dateNoFormat.toLocaleDateString() + ' ' +
                            [dateNoFormat.getHours().toString().padStart(2, '0'),
                            dateNoFormat.getMinutes().toString().padStart(2, '0')].join(':');
    return dateFormatted;
};

const showWeekNumber = (date) => {
    const dateDay = new Date(date);
    const firstJanuary = new Date(dateDay.getFullYear(), 0, 1);
    const numberOfDaysInBetween = Math.floor((dateDay - firstJanuary) / (24 * 60 * 60 * 1000));
    const numberOfTheWeek = Math.ceil((dateDay.getDay() + 1 + numberOfDaysInBetween) / 7);
    return numberOfTheWeek;
};

const showResults = (dateList) => {
    return (dateList.map((date) => (
        {
            lastDayOfLastMonth: showLastDayOfLastMonth(date),
            dateZeroed: formatDate(setHoursAndMinutesToZero(date)),
            dateFormatted: formatDate(date),
            weekNumber: showWeekNumber(date)
        }
    )));
};

console.log(showResults(dateList));
