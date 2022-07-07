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

/* The 'map()' method allows you to change items in a collection,
then stores the changed items in a new collection.

The following example will convert the items in the 'countries'
array to uppercase letters, then print the results to the console. */

function toUpper(string) {
    return string.toUpperCase();
}

const countries = ["Canada", "Germany", "Mexico", "France"];

const upperCountries = countries.map(toUpper);

console.log(upperCountries);

/* You can use 'filter()' to test each item in a collection against
a specified filter, and create a new collection containing items
that match. */

function lFruits(fruit) {
    return fruit.startsWith("L");
}

const fruits = ["Banana", "Lemon", "Apple", "Lime"];

const filtered = fruits.filter(lFruits);

console.log(filtered);

/* Instead of using a 'for...of' loop, you can iterate through a
collection using a standard 'for' loop.

In most cases, it is best practice to use 'for...of' with
collections/arrays. */

const candy = ["Snickers", "Reese's", "Butterfinger"];

for (let i = 0; i < candy.length; i++) {
    console.log(candy[i]);
}

/* Using a 'for' loop, the example below will output a custom
message listing items in a collection. */

const dogs = ["Max", "Juno", "Snowflake", "Curly"];

let myFavoriteDogs = "My dogs are called ";

for (let i = 0; i < dogs.length; i++) {
    if (i === dogs.length - 1) {
        myFavoriteDogs += `and ${dogs[i]}.`
    } else {
        myFavoriteDogs += `${dogs[i]}, `
    }
}

console.log(myFavoriteDogs);

/* The 'continue' directive can be used to stop the current
iteration and force the loop to start a new one.

The following example uses 'continue' to output only odd
values in each iteration. Even values will be skipped
over. */

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;

    alert(i);
}