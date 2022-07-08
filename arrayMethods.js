/* Array values can be converted to a string, separated by
commas. */

const soda = ["Coca-Cola", "Mountain Dew", "Dr. Pepper"];
document.getElementById("demo").innerHTML = soda.toString();

/* The 'join()' method allows you to specify a separator
and returns array elements as a string. */

document.getElementById("demo").innerHTML = soda.join(" * ");

/* The 'reverse()' method reverses the order of elements
in an array. */

const colors = ["Red", "Yellow", "Blue", "Black"];
colors.reverse();

/* The 'pop()' method removes the last element from
an array. This method will return the value that was
removed. */

const fruits = ["Apple", "Orange", "Banana", "Mango"];
let fruit = fruits.pop();

/* The 'shift()' method removes the first array element
and shifts all other elements to a lower index. */

fruits.shift();

/* The 'unshift()' method adds a new element to the
beginning of an array, and unshifts older elements. */

fruits.unshift("Lemon");

/* The 'concat()' method creates a new array by merging
existing arrays. */

const myDogs = ["Rufus", "Sparky", "Bear"];
const myCats = ["Fluffy", "Koda", "Linus"];

const myPets = myDogs.concat(myCats);

/* The 'splice()' method adds new items to an array. */

fruits.splice();

/* The first parameter '2' defines the position where new
elements should be spliced in.

The second parameter '0' defines how many elements should
be removed. */

fruits.splice(2, 0, "Lemon", "Kiwi");
// Returns: Apple,Orange,Lemon,Kiwi,Banana,Mango

/* You can also use 'splice()' to remove elements without
leaving undefined holes in the array. */

fruits.splice(0, 1);

/* The 'slice()' method removes a piece of the array.
It will place the removed element into a new array. */

const states = ["Florida", "New York", "Arizona"];
const east = states.slice(2);
// Returns: Arizona