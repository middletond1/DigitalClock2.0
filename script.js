const timeDisplay = document.querySelector('#time');
const dateDisplay = document.querySelector('#date');

function getCurrentTime() {
    const date = new Date();
    return date;
}

function hours() {
    let hours = getCurrentTime().getHours();
    switch (hours) {
        case 00:
            hours = '1';
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
    hours = hours.toString().padStart(2, '0');
    return hours;
}

function minutes() {
    let minutes = getCurrentTime().getMinutes();
    minutes = minutes.toString().padStart(2, '0');
    return minutes;
}

function seconds() {
    let seconds = getCurrentTime().getSeconds();
    seconds = seconds.toString().padStart(2, '0');
    return seconds;
}

function day() {
    let day = getCurrentTime().getDay();
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day = weekday[day];
    return day;
}

function month() {
    let month = getCurrentTime().getMonth();
    const calendarMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
    month = calendarMonth[month];
    return month;
}

function date() {
    let date = getCurrentTime().getDate();
    date = date.toString();
    if (date.charAt(date.length - 1) === '1') {
        date = date + 'st';
    } else if (date.charAt(date.length - 1) === '2') {
        date = date + 'nd';
    } else if (date.charAt(date.length - 1) === '3') {
        date = date + 'rd';
    } else {
        date = date + 'th';
    }
    return date;
}

function year() {
    let year = getCurrentTime().getFullYear();
    return year;
}

function drawTime() {
    while (timeDisplay.firstChild) {
        timeDisplay.removeChild(timeDisplay.firstChild);
    }
    timeDisplay.appendChild(document.createTextNode(`${hours()}:${minutes()}:${seconds()}`));
}

function drawDate() {
    while (dateDisplay.firstChild) {
        dateDisplay.removeChild(dateDisplay.firstChild);
    }
    dateDisplay.appendChild(document.createTextNode(`${day()}, ${month()} ${date()} ${year()}`));
}

drawTime();
drawDate();
setInterval('drawTime()', 1000);
setInterval('drawDate()', 1000);


