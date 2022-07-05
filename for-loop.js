/* A 'for' statement makes a loop that consists of three
optional expressions, followed by a statement to be executed
within the loop.

Initialization: An expression or variable that is evaluated
before the loop begins, such as a counter variable.

Condition: An expression to be evaluated before each iteration
of the loop. If the expression is 'true' then the statement
will be executed.

Final-expression: The expression to be evaluated at the end of
each loop iteration. Used to update or increment a counter
variable. */

for (let i = 0; i < 3; i++) {
    
    let input = prompt("Enter a number from 1 - 10:");

    if (input > 10) {
        console.log("That number is too high.");
    } else {
        console.log(`You entered: ${input}.`);
    }
}

/* The following loop will count up from 1 to 10.

The counter starts at 1, ends at 10, and counts +1 each
iteration. */

let str = "";

for (i = 1; i < 11; i++) {
    str = str + i;
}

console.log(str);

/* The 'for...of' loop is a basic tool for looping
through a collection of values, such as an array.

The example loop below will get the first item of a
collection and assign it to the 'cat' variable. It will
then print the item to the console, and repeat the process
for each item in the collection. */

const cats = ["Tiger", "Jaguar", "Lion", "Leopard"];

for (const cat of cats) {
    console.log(cat);
}