/* The split() method splits a string into an array of
substrings.

The method can contain a separator and a limit:
split(separator, limit);

The 'separator' defines where each split should occur.

The 'limit' is a non-negative integer specifying a limit on
the number of substrings to be included in the array. Any
leftover text beyond the limit is not included in the
array. */

const str = "Split this string.";
const split = str.split(" ");
console.log(split);
// Output: ["Split", "this", "string."]