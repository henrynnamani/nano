/**
 * querySelector()
 * getElementById
 * getElementByClass
 */

/**
 * class - .
 * id - #
 */

const h1 = document.querySelector(".head");
const btn = document.querySelector(".btn");
const userNameTextInput = document.querySelector("#username");
const body = document.querySelector(".body");

const paragraphElement = document.createElement("p");

let username = "";

btn.addEventListener("click", () => {
  paragraphElement.textContent = username;
  body.appendChild(paragraphElement);
  username = "";
});
// innerHTML and textContent

userNameTextInput.addEventListener("input", (event) => {
  console.log(event.data);
  if (event.data != null) {
    username += event.data;
  }
});

h1.innerHTML = "I am a robot";

h1.style.color = "#131bbbff";
h1.style.margin = "10px";
h1.style.textDecoration = "underline";
h1.style.fontSize = "28px";
