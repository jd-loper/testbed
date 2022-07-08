/* This program will convert Fahrenheit values to
Celsius.

The user will be prompted to input a value in Fahrenheit.
The program will run the value through a conversion formula.
The program will output the new Celsius value. */

let userInput = prompt("Enter a value for Fahrenheit:");
let convert = (userInput - 32) * 5 / 9;
const c = `${userInput}F = ${convert}C`
console.log(c);