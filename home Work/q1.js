let person = {
  name: "Dilna",
  age: 31,
  city: "Kozhikode"
};

console.log(person);


//.............................q2....................//

person.country = "India"; // Adding new property
console.log(person);

//.................q3...........................//

delete person.city; // Removing property
console.log(person);
//............................q4....................//

if (person.age >= 18) {
  console.log(person.name + " is an adult.");
}
//.........................q5......................//

let a = 15, b = 25;

if (a > b) {
  console.log(a + " is larger");
} else {
  console.log(b + " is larger");
}
//..........................q6.....................//


let monthNumber = 3;
let monthName;

switch (monthNumber) {
  case 1: monthName = "January"; break;
  case 2: monthName = "February"; break;
  case 3: monthName = "March"; break;
  case 4: monthName = "April"; break;
  case 5: monthName = "May"; break;
  case 6: monthName = "June"; break;
  case 7: monthName = "July"; break;
  case 8: monthName = "August"; break;
  case 9: monthName = "September"; break;
  case 10: monthName = "October"; break;
  case 11: monthName = "November"; break;
  case 12: monthName = "December"; break;
  default: monthName = "Invalid month";
}

console.log(monthName);


//......................q7............................//

let num = 30;

if (num % 3 === 0 && num % 5 === 0) {
  console.log(num + " is divisible by both 3 and 5");
} else {
  console.log(num + " is not divisible by both 3 and 5");
}
//.......................q8............................//

let x = 10, y = 7;
let min = (x < y) ? x : y;

console.log("Minimum is " + min);


