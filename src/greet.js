"use strict";

function Greet(name) {
  this.name = name;
}

Greet.prototype.greeting = function () {
  return "Hello " + this.name;
};

module.exports = Greet;
