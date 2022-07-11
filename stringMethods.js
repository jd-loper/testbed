/* The split() method splits a string into an array of
substrings.

The method can contain a separator and a limit:
split(separator, limit);

The 'separator' defines where each split should occur.

The 'limit' is a non-negative integer specifying a limit on
the number of substrings to be included in the array. Any
leftover text is not included in the array. */

const str = "Split this string.";
const split = str.split(" ");
console.log(split);
// Output: ["Split", "this", "string."]

/* The example below will split a string into an array,
reverse the contents in the array, and join them back
together to form a new string.

This is because strings are immutable and cannot be
reversed in-place. */

const text = "Hello World!";
const reverseText = text.split("").reverse().join("");
console.log(reverseText);

/* The 'repeat()' method returns a string with a
number of copies of the string. */

text.repeat(2); // "Hello World!Hello World!"

/* The 'charAt()' method returns a character in the string
at a specified index position. */

text.charAt(0); // "H"

/* You can concatenate two or more strings with the
'concat()' method. */

let text1 = "race";
let text2 = "car";
let newString = text1.concat(text2);