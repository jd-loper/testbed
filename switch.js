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