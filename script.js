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


const dateListTest = [new Date(2021, 3, 28), new Date(2021, 7, 4)];

const lastMonthDay = (date) => {
    const tempDate = new Date(date).setDate(0);
    const tempDateToStr = new Date(tempDate).toLocaleDateString();
    return tempDateToStr;
};

const dateZeroed = (date) => {
    const tempDate = new Date(date);
    tempDate.setHours(0);
    tempDate.setMinutes(0);
    return tempDate.toLocaleDateString() + ' ' +
        tempDate.getHours().toString().padStart(2, '0') + ':' +
        tempDate.getMinutes().toString().padStart(2, '0');
};

const dateFormatted = (date) => {
    const tempDate = new Date(date);
    const tempDateFormatted = [(tempDate.getDay() +1).toString().padStart(2, '0'),
                            (tempDate.getMonth() +1).toString().padStart(2, '0'),
                            tempDate.getFullYear()].join('/')
                            + ' ' +
                            [tempDate.getHours().toString().padStart(2, '0'),
                            tempDate.getMinutes().toString().padStart(2, '0')].join(':');
    return tempDateFormatted;
};

const weekNumber = (date) => {
    const tempDate = new Date(date);
    const firstJan = new Date(tempDate.getFullYear(), 0, 1);
    const numberOfDays = Math.floor((tempDate - firstJan) / (24 * 60 * 60 * 1000));
    const weekNum = Math.ceil((tempDate.getDay() + 1 + numberOfDays) / 7);
    return weekNum;
};

const result = (dateList) => {
    return (dateList.map((date) => (
        {
            lastMonthDay: lastMonthDay(date),
            dateZeroed: dateZeroed(date),
            dateFormatted: dateFormatted(date),
            weekNumber: weekNumber(date)
        }
    )));
};

console.log(result(dateListTest));
