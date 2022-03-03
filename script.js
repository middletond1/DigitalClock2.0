const timeDisplay = document.querySelector('#time');
const dateDisplay = document.querySelector('#date');

function getDateObject() {
    const date = new Date();
    return date;
}

function getHours() {
    let hours = getDateObject().getHours();
    switch (hours) {
        case 0:
            hours = '12';
            break;
        case 13:
            hours = "1";
            break;
        case 14: 
            hours = '2';
            break;
        case 15:
            hours = '3';
            break;
        case 16:
            hours = '4';
            break;
        case 17:
            hours = '5';
            break;
        case 18:
            hours = '6';
            break;
        case 19:
            hours = '7';
            break;
        case 20:
            hours = '8';
            break;
        case 21:
            hours = '9';
            break;
        case 22:
            hours = '10';
            break;
        case 23:
            hours = '11';
            break;
        case 24:
            hours = '12';
            break;
    };
    return hours.toString().padStart(2, '0');;
}

function getMinutes() {
    let minutes = getDateObject().getMinutes();
    return minutes.toString().padStart(2, '0');;
}

function getSeconds() {
    let seconds = getDateObject().getSeconds();
    return seconds.toString().padStart(2, '0');
}

function getDay() {
    let day = getDateObject().getDay();
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekday[day];
}

function getMonth() {
    let month = getDateObject().getMonth();
    const calendarMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
    return calendarMonth[month];
}

function getDate() {
    let date = getDateObject().getDate().toString();
    const dateOnesPlace = date.charAt(date.length - 1)
    if (dateOnesPlace === '1') {
        date = date + 'st';
    } else if (dateOnesPlace === '2') {
        date = date + 'nd';
    } else if (dateOnesPlace === '3') {
        date = date + 'rd';
    } else {
        date = date + 'th';
    }
    return date;
}

function getYear() {
    let year = getDateObject().getFullYear();
    return year;
}

function drawTime() {
    while (timeDisplay.firstChild) {
        timeDisplay.removeChild(timeDisplay.firstChild);
    }
    timeDisplay.appendChild(document.createTextNode(`${getHours()}:${getMinutes()}:${getSeconds()}`));
}

function drawDate() {
    while (dateDisplay.firstChild) {
        dateDisplay.removeChild(dateDisplay.firstChild);
    }
    dateDisplay.appendChild(document.createTextNode(`${getDay()}, ${getMonth()} ${getDate()} ${getYear()}`));
}

drawTime();
drawDate();
setInterval('drawTime()', 1000);
setInterval('drawDate()', 1000);


