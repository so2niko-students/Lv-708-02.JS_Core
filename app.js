const getHolidaysURL = (code = 'UA', year = 2022) => {
    return `https://date.nager.at/api/v3/publicholidays/${ year }/${ code }`;
}

const isValidDate = date => {
    const now = Date.now();
    const then = new Date(date);

    if(now > then) return false;

    return /^\d{4}-\d{2}-\d{2}$/.test(date);
}

const isValidCountry = country => {
    if(country.length != 2) return false;
    if(!/[a-z]{2}/i.test(country)) return false;

    return true;
}   

const DOM = {
    inpDate : document.querySelector('.inp-date'),
    inpFrom : document.querySelector('.inp-from'),
    inpTo : document.querySelector('.inp-to'),
    btnCount : document.querySelector('.btn-count'),
    outAnswer : document.querySelector('.answer')
};

// fetch(getHolidaysURL()).then(r => r.json()).then(console.log);

const showAnswer = (isHoliday) => {
    const price = isHoliday ? '+50' : '0';
    DOM.outAnswer.innerText = `Your price increase on ${ price }%`;
}


DOM.btnCount.onclick = () => {
    const date = DOM.inpDate.value;
    const from = DOM.inpFrom.value;
    const to = DOM.inpTo.value;

    const isValidD = isValidDate(date);
    const isValidCountryFrom = isValidCountry(from);
    const isValidCountryTo = isValidCountry(to);
    console.log(date, from , to);
    console.log(isValidD, isValidCountryFrom, isValidCountryTo);
    if(isValidD && isValidCountryFrom && isValidCountryTo){
        const year = date.split('-')[0];
        const fFrom = fetch(getHolidaysURL(from, year)).then(r => r.json());
        const fTo = fetch(getHolidaysURL(to, year)).then(r => r.json());

        Promise.all([fFrom, fTo]).then(values => {
            const dates = values.flat().map(el => el.date);
            console.log(dates);
            const isHoliday = dates.includes(date);

            showAnswer(isHoliday);
        });
    }
}

