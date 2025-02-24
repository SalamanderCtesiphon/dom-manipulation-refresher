const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";
redText.classList.add("content");

container.appendChild(redText);

const blueHthree = document.createElement("h3");
blueHthree.classList.add("content");
blueHthree.textContent = "I'm a blue h3!";
blueHthree.style.color = "blue";

container.appendChild(blueHthree);

const newDiv = document.createElement("div");
newDiv.style.border = "2px solid black";
newDiv.style.backgroundColor = "pink";

const divTitle = document.createElement("h1");
divTitle.textContent = "I'm a div";

const divText = document.createElement("p");
divText.textContent = "ME TOO!";


newDiv.appendChild(divTitle);
newDiv.appendChild(divText);

container.appendChild(newDiv);

