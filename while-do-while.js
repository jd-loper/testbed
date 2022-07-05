/* A 'while' statement is similar to a 'for' statement,
but the initializer variable is set before the loop.
The final-expression is included inside the loop after the code
to be executed.

The condition is included inside the parentheses, preceded by the
'while' keyword. */

const food = ["pizza", "cheeseburgers", "burritos"];

let myFavoriteFoods = "Some of my favorite foods are ";

let i = 0;

while (i < food.length) {
    if (i === food.length - 1) {
        myFavoriteFoods += `and ${food[i]}.`
    } else {
        myFavoriteFoods += `${food[i]}, `
    }

    i++;
}

console.log(myFavoriteFoods);

/* In a 'do...while' loop, the code inside the loop is always
executed at least once. The condition comes after the code inside
the loop.

A 'for' loop will first check the condition to determine if the
code needs to be executed. */

do {
    if (i === food.length - 1) {
        myFavoriteFoods += `and ${food[i]}.`
    } else {
        myFavoriteFoods += `${food[i]}, `
    }

    i++;
} while (i < food.length);

console.log(myFavoriteFoods);