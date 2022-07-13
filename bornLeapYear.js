// A program to determine if you were born on a leap year.

let birthYear = prompt("What was your birth year?", "1984");
let leapYears = function() {
    if (birthYear % 400 == 0) {
        alert("That is a leap year!");
    } else if (birthYear % 100 !== 0 && birthYear % 4 == 0) {
        alert("That is a leap year!");
    } else alert("That is not a leap year.");
}

leapYears();