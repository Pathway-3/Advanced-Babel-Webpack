"use strict";

import Greet from "./greet";

Greet;
const greet = new Greet("John");

console.log(greet.greeting());

const changename = document.getElementById("change-name");
const name = document.getElementById("name");

name.innerText = "John";

console.log(name.innerText);

changename.addEventListener("click", () => {
  const name = document.getElementById("name");

  name.innerText = "Jane";
});
