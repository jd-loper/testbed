/* Function expressions can be made in the middle of
any expression

Function expressions are assigned to the right of = */

/* Example 1 */

let sayHi = function() {
    alert("Hello");
};

/* A semicolon ; is added at the end of the statement
that contains the function */

/* Example 2 */

let sum = function(a, b) {
    return a + b;
};

/* Ternary Operator */

let age = prompt("What is your age?");

let welcome = (age < 18) ?
    function() { alert("Hello!"); } :
    function() { alert("Greetings!"); };

/* Callback Functions */

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You disagreed."); }
);

/* Functions can be passed and called back later */