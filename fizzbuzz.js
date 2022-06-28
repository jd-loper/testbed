/* The 'prompt' function will display a pop-up box with
a message that will take a user's input

The 'parseInt' function will return a number from the user's
input */

let answer = parseInt(prompt("Enter a number."));

/* Variable 'i' is declared and assigned to the value of '1'.
This is the initial value of the variable in the loop. In other
cases the initial value is typically '0'

'i <= answer' is a condition of the program that will execute the
loop until 'i' is greater than 'answer', with 'answer' being
the user's input

The third clause 'i++' tells the loop to increment 'i' by 1 in
every iteration. If the user inputs '10', the loop will print
numbers 1 - 10 to the console */

for (let i = 1; i <= answer; i++) {
    console.log(i);
}

/* Using if and else statements, the program will print "Fizz" if
the current number is divisible by 3

The modulus operator '%' will divide the current number by 3 and
return a remainder. If the remainder is '0' the program will
print "Fizz" */

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

/* An 'else if' condition is added to determine if the current
number is divisible by 5 */

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

/* The 'if' condition is modified to determine if the current
number is divisible by 3 and 5 before moving on to check if
the number is divisible by 3 or 5 individually

This will prevent the program from checking the first condition
'i % 3' and moving on to the next iteration even if the number 'i'
is divisible by 5 as well */

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

/* The '&&' operator allows the program to check both 'if'
conditions against 'i' */