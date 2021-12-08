const listTest = [0, 1, 240, 21, 10, 23, 31];

const displayGenre = (list) =>{
    list.forEach( n => {
        if (n % 15 === 0) console.log(" GarçonFille ");
        else if (n % 3 === 0) console.log(" Garçon ");
        else if (n % 5 === 0) console.log(" Fille ");
        else console.log(n);
    });
}
displayGenre(listTest);


const dateListTest = [new Date(2021, 3, 28, 18, 54), new Date(2021, 7, 4, 7, 5), new Date(2018, 5, 2, 3, 4)];

const lastMonthDay = (n) => {
    const date = new Date(n).setDate(0);
    const dateToStr = new Date(date).toLocaleDateString();
    return dateToStr;
};

const dateZeroed = (n) => {
    const date = new Date(n);
    date.setHours(0);
    date.setMinutes(0);
    return date;
};

const dateFormatted = (n) => {
    const date = new Date(n);
    const dateWithFormat = date.toLocaleDateString() + ' ' +
                            [date.getHours().toString().padStart(2, '0'),
                            date.getMinutes().toString().padStart(2, '0')].join(':');
    return dateWithFormat;
};

const weekNumber = (n) => {
    const date = new Date(n);
    const firstJan = new Date(date.getFullYear(), 0, 1);
    const numberOfDays = Math.floor((date - firstJan) / (24 * 60 * 60 * 1000));
    const numberOfTheWeek = Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
    return numberOfTheWeek;
};

const result = (dateList) => {
    return (dateList.map((date) => (
        {
            lastMonthDay: lastMonthDay(date),
            dateZeroed: dateFormatted(dateZeroed(date)),
            dateFormatted: dateFormatted(date),
            weekNumber: weekNumber(date)
        }
    )));
};

console.log(result(dateListTest));
