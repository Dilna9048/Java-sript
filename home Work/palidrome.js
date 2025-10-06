
const prompt = require("prompt-sync")();
let str = prompt("Enter a string:");
let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(str, "is a Palindrome");
} else {
  console.log(str, "is Not a Palindrome");
}

