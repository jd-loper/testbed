/* Simple program to output the current time */

let checkTime = new Date();

let time = checkTime.getHours();

let fullTime = checkTime.getHours() + ":" + checkTime.getMinutes();

function schedule(time) {
    if (time >= 16) {
        alert(`The time now is ${fullTime}. Good night.`);
    } else {
        alert(`The time now is ${fullTime}. Good day!`);
    }
}

schedule(time);