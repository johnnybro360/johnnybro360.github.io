let dom = document;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const months = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August'
    , 'September', 'October', 'November', 'December']


const colon = dom.getElementById('colon');
const amPm =dom.getElementById('am-pm');

function flashOff() {
    colon.style.visibility = 'hidden';
}

function flashOn() {
    colon.style.visibility = 'visible';
}

setInterval(flashOff, 500);

setInterval(flashOn, 1000);

let clockDay = dom.getElementById('day')
let clockDate = dom.getElementById('date');
let clockHour = dom.getElementById('hour');
let clockMin = dom.getElementById('minute');

setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    let hourString = hour.toString();
    if (hourString.length === 1) {
        hourString = '0' + hourString;
    }
    clockHour.innerText = hourString;
}, 1000)

setInterval(() => {
    const date = new Date();
    const minute = date.getMinutes();
    let minuteString = minute.toString()
    if (minuteString.length === 1) {
        minuteString = '0' + minuteString;
    }
    clockMin.innerText = minuteString;
}, 1000)

setInterval(() => {
    const date = new Date();
    clockDay.innerText = `${days[date.getDay()]}`;
    clockDate.innerText = `${months[date.getMonth()]} ${date.getDate()}`;
}, 1000)

const twelveHourButton = dom.getElementById('12hr')
const twentyFourHourButton = dom.getElementById('24hr')

twelveHourButton.addEventListener('click', twelveHourDisplay)

function twelveHourDisplay(){

    const date = new Date();
    const hour = date.getHours() % 12 || 12;
    let hourString = hour.toString()
    if (hourString.length === 1) {
        hourString = '0' + hourString;
    }
    clockHour.innerText = hourString;

    if ( date.getHours() >= 12 && date.getHours() <= 23 ){
        amPm.innerText = `PM`;
    } else {
        amPm.innerText = `AM`;
    }
}

twentyFourHourButton.addEventListener('click', twentyFourHourDisplay)

function twentyFourHourDisplay(){
    const date = new Date();
    const hour = date.getHours();
    let hourString = hour.toString()
    if (hourString.length === 1) {
        hourString = '0' + hourString;
    }
    clockHour.innerText = hourString;
    amPm.innerText = '';
}