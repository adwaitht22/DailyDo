console.log("Hello, World!");

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkbox";
document.body.appendChild(inputElement);

let labelElement = document.createElement("label");
labelElement.htmlFor = "checkbox";
labelElement.textContent = "List 1!";
document.body.appendChild(labelElement);