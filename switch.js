/* A switch statement will evaluate an expression against
multiple possible cases and execute one or more blocks
of code based on matching cases */

switch (expression) {
    case x:
        // case x code block
        break;
    case y:
        // case y code block
        break;
    default:
        // default code block
}

/* The 'break' keyword will end the switch block if the
evaluated expression matches the case

If it does not match, the next case will be executed

If no cases match, the default code block will run */

const day = new Date().getDay();

switch (day) {
    case 0:
        console.log("It's Sunday!");
        break;
    case 1:
        console.log("It's Monday!");
        break;
    case 2:
        console.log("It's Tuesday!");
        break;
    case 3:
        console.log("It's Wednesday!");
        break;
    case 4:
        console.log("It's Thursday!");
        break;
    case 5:
        console.log("It's Friday!");
        break;
    case 6:
        console.log("It's Saturday!");
        break;
    default:
        console.log("Something went wrong.");
}

/* The above example will test each case from top to bottom
against the expression to determine which day of the week
it is. The program will then output the correct day
of the week to the console */

/* Switch statements can also be applied to a range of values.
The expression must be set to 'true' and an operation will be
performed within each case */

const grade = 87; // For a student's grade

switch (true) {
    case grade >= 90:
        console.log("A");
        break;
    case grade >= 80:
        console.log("B");
        break;
    case grade >= 70:
        console.log("C");
        break;
    case grade >= 60:
        console.log("D");
        break;
    default:
        console.log("F");
}

/* Switches can also have multiple cases with the same output

This example is a program to determine which season of
the year it currently is */

const month = new Date().getMonth();

switch (month) {
    case 0:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Something went wrong.");
}