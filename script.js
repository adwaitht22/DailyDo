console.log("JavaScript is connected!");
let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkbox";
document.body.appendChild(inputElement);

let labelElement = document.createElement("label");
labelElement.htmlFor = "checkbox";
labelElement.textContent = "Check me!";
document.body.appendChild(labelElement);