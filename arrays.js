/* An 'array' is an ordered collection of items. It is a
variable that can hold more than one value. */

const cars = ["Chevy", "Kia", "Nissan"];

/* The values within an array can be accessed by referring
to an index number. */

let car = cars[0];

/* You can also provide the elements after the array is
created. */

const food = [];
food[0] = "Eggs";
food[1] = "Bacon";
food[2] = "Cheese";

/* An array element can also be changed. */

cars[0] = "Ford";

/* Array elements can be objects. You can have variables
of different types in the same array. An array can even
contain another array. */

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = cars;

/* Arrays have built-in methods and properties. */

cars.length // Returns the number of elements
cars.sort() // Sorts the array

/* The 'length' property returns the number of array
elements.

It is always one more than the highest array index. */

const fruits = ["Apple", "Banana", "Orange"];
let length = fruits.length;

/* You can access the full array on a webpage by
referring to the array name. */

document.getElementById("demo").innerHTML = cars;

/* To access the last element in the array: */

let fruit = fruits[fruits.length - 1];

/* Elements can also be looped.

The example below will generate a list of elements using
a 'for' loop. */

const states = ["Arizona", "New York", "Colorado"];
let sLen = states.length;

let text = "<ul>";
for (let i = 0; i < sLen; i++) {
    text += "<li>" + states[i] + "</li>";
}
text += "</ul>";