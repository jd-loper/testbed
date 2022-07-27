/* A textbox can be made by using the 'document' object to
create an 'input' element. */

const input = document.createElement("input");

/* The element must be told to accept text as the type of input. */

input.setAttribute("type", "text");

/* Append the textbox to the body element of an HTML document. */

document.body.appendChild(input);