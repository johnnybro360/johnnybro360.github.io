// Digital Clock Demo

let dom = document;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August'
    , 'September', 'October', 'November', 'December'];


// HTML Element
const colon = dom.getElementById('colon');
const amPm = dom.getElementById('am-pm');
let clockDay = dom.getElementById('day');
let clockDate = dom.getElementById('date');
let clockHour = dom.getElementById('hour');
let clockMin = dom.getElementById('minute');
const radios = document.querySelectorAll('input[type="radio"]');
const twelveHourButton = dom.getElementById('12hr');
const twentyFourHourButton = dom.getElementById('24hr');


function flashOff() {
    colon.style.visibility = 'hidden';
}

function flashOn() {
    colon.style.visibility = 'visible';
}

setInterval(flashOff, 500);

setInterval(flashOn, 1000);

// Display Clock
function displayClock() {
    const date = new Date();
    const minute = date.getMinutes();
    const day = `${days[date.getDay()]}`;
    const monthDate = `${months[date.getMonth()]} ${date.getDate()}`;
    clockDay.innerText = `${day}`;
    clockDate.innerText = `${monthDate}`;
    let minuteString = minute.toString();
    if (minuteString.length === 1) {
        minuteString = '0' + minuteString;
    }
    clockMin.innerText = minuteString;
    if (twentyFourHourButton.checked) {
        const hour = date.getHours();
        let hourString = hour.toString();
        if (hourString.length === 1) {
            hourString = '0' + hourString;
        }
        clockHour.innerText = hourString;
        amPm.innerText = '';
    } else {
        const hour = date.getHours() % 12 || 12;
        let hourString = hour.toString();
        if (hourString.length === 1) {
            hourString = '0' + hourString;
        }
        clockHour.innerText = hourString;
        if (date.getHours() >= 12 && date.getHours() <= 23) {
            amPm.innerText = `PM`;
        } else {
            amPm.innerText = `AM`;
        }
    }
}

window.onload = () => {
    displayClock();
}

twelveHourButton.addEventListener('click', () => {
    for (let radio of radios) {
        if (radio.checked) {
            displayClock();
        }
    }
})

setInterval(() => {
    displayClock();
}, 1000);