const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter a number:"));
let result = "";

for (let i = 0; i < 1; i++) {  // run only once
  if (n % 2 === 0) {
    result = "Even";
  } else {
    result = "Odd";
  }
}

console.log(n, "is", result);

