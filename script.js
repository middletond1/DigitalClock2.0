function getTime() {
    const date = new Date();
    return date;
}

function hours() {
    let hours = getTime().getHours();
    switch (hours) {
        case 13:
            hours = 1;
            break;
        case 14:
            hours = 2;
            break;
        case 15:
            hours = 3;
            break;
        case 16:
            hours = 4;
            break;
        case 17:
            hours = 5;
            break;
        case 18:
            hours = 6;
            break;
        case 19:
            hours = 7;
            break;
        case 20:
            hours = 8;
            break;
        case 21:
            hours = 9;
            break;
        case 22:
            hours = 10;
            break;
        case 23:
            hours = 11;
            break;
        case 24:
            hours = 12;
            break;
    }
    return hours;
}

function minutes() {
    let minutes = getTime().getMinutes();
    return minutes;
}

function seconds() {
    let seconds = getTime().getSeconds();
    return seconds;
}

// setInterval('drawTime()', 500);
console.log(hours());
console.log(minutes());
console.log(seconds());

// const minutes = date.getMinutes();
// const seconds = date.getSeconds();