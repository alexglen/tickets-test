export const formatDate = (date) => {
    const objectDate = new Date(date);
    const months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ];

    const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const number = objectDate.getDate();
    const month = months[objectDate.getMonth()];
    const fullYear = objectDate.getFullYear();
    const dayName = weekDays[objectDate.getDay()];

    return `${number} ${month} ${fullYear}, ${dayName}`
}

export const getWordWithCountOfStopsInRightCase = (number) => {
    const words = ["ПЕРЕСАДКА", "ПЕРЕСАДКИ", "ПЕРЕСАДОК"];
    if (number % 10 === 1 && number % 100 !== 11) {
        return words[0];
    } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        return words[1];
    }
    return words[2];
}

export const getDataWithCurrentCurrency = (data, currency) => {
    const {currentCurrency} = currency;
    const changedDataWithCurrencySymbol = data.map(ticket => ({...ticket, type: currentCurrency}))

    if (currentCurrency === "rub") {
        return changedDataWithCurrencySymbol;
    }
    return changedDataWithCurrencySymbol.map(ticket => ({
        ...ticket,
        price: (ticket.price / currency[currentCurrency]).toFixed(2)
    }));
}

export const filteredData = (data, currency) => {
    const {stops} = currency;
    return [...data.filter(ticket => stops.includes(ticket.stops))].sort((a, b) => a.price - b.price);
}