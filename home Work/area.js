const prompt = require("prompt-sync")();
let side = parseFloat(prompt("Enter side of square:"));
let areaSquare = side * side;
console.log("Area of square =", areaSquare);
