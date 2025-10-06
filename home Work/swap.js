const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));

a = a + b;
b = a - b;
a = a - b;

console.log("After swapping: a =", a, "b =", b);
