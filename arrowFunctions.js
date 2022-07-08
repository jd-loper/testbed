/* Arrow functions are simple and concise

An arrow function accepts arguments then evaluates the
expression on the right side of the arrow

They are useful for simple actions or one-liners */

let sum = (a, b) => a + b;

/* The above example is a shorter form of:

let sum = function(a, b) {
    return a + b;
};

*/

let double = n => n * 2;

/* If there is only one argument the parentheses
may be omitted */

let sayHi = () => alert("Hello!");

sayHi();

/* If there are no arguments the parentheses must
still be present */

let age = prompt("What is your age?");

let welcome = (age < 18) ?
    () => alert("Hello!") :
    () => alert("Greetings!");

welcome();

/* Arrow functions can be used in the same way as
function expressions */