/* This program will convert Fahrenheit values to
Celsius, and Celsius to Fahrenheit. */

const ftoc = function(x) {
  let fResult = ((x - 32) * 5 / 9);
  return Math.round(fResult * 10) / 10;
};
  
ftoc(-100);
  
const ctof = function(y) {
  let cResult = (y * 9/5) + 32;
  return Math.round(cResult * 10) / 10;
};
  
ctof(-10);