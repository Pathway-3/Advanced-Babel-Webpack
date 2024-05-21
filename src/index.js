"use strict";

import Greet from "./greet";

const greet = new Greet("John");

console.log(greet.greeting());

const name = document.getElementById("name");

name.innerHTML = greet.name;
