"use strict";

const greet = new Greet("John");

class Greet {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    return `Hello ${this.name}`;
  }
}

console.log(greet.greeting());

export default Greet;
