/* Events are dynamic or responsive actions that occur on
a webpage. */

<button id="btn">Click me!</button>
// A button in HTML

const btn = document.querySelector("#btn");
// Target the button with JavaScript

btn.addEventListener("click", () => {
    alert("Hello there!");
})
// A message is alerted when the button is clicked

function alertMessage() {
    alert("You're the 1,000,000th visitor!");
}
// Named functions can also be used

btn.addEventListener("click", alertMessage);
// The function is passed through the event listener