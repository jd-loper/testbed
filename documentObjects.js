/* The Document Object Model is a tree-like representation
of the contents of a webpage.

You can use document selectors to target nodes you want to
work with. A node is selected based on the relationships
to the nodes around it. */

<div id="container">
    <div class="display"></div>
    <div class="controls"></div>
</div>

const container = document.querySelector("#container");
// Selects container div
console.dir(container.firstElementChild);
// Selects the first child of #container => .display

const controls = document.querySelector(".controls");
// Selects the .controls div
console.dir(controls.previousElementSibling);
// Selects the previous sibling => .display

/* New elements can be created using the '.createElement()'
method. */

const div = document.createElement("div");