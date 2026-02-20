// Literals

let pencilPrice = 10;
let eraserPrice = 5;

// console.log("total price is:", pencilPrice + eraserPrice, " Rupees. ");

console.log(`Your total pay is ${pencilPrice + eraserPrice} rupees`);

// ===================== PRACTICE QUESTION =======================
// for traffic signal
let color = "blue";
if (color === "red") {
  console.log("Stop! Light color is red");
} else if (color === "yellow") {
  console.log("Slow down! Light color is yellow");
} else if (color === "green") {
  console.log("Go! Light color is green");
} else {
  console.log("Traffic light is broken");
}
// ==================== Else if =======================

let marks = 75;

if (marks >= 80) {
  console.log("Grade A+");
} else if (marks >= 60) {
  console.log("Grade A");
} else if (marks >= 33) {
  console.log("Grade B");
} else if (marks < 33) {
  console.log("Grade F");
}

// ==================== Practice questions =======================
/*
Qs. create a system to calculate popcorn price based on the size of the size customer asked for:

*/

let size = "M";
if (size === "XL") {
  console.log("Price is Rs.250");
} else if (size === "L") {
  console.log("Price is Rs.200");
} else if (size === "M") {
  console.log("Price is Rs.100");
} else {
  console.log("price is Rs.50");
}

// Logical operators
let mark = 75;
if (!(mark < 33)) {
  console.log("Pass");
  console.log("Grade A+");
}

let result = 75;
if ((result > 33 && result <= 80) || !false) {
  console.log("pass");
}

// Practice question
// Qs. A "GOOD STRING" is a string that starts with the letter 'a' and has a lenght > 3. Write a program to check if the string is a good string or not.

let str = "asphalt";
if (str[0] === "a" && str.length > 3) {
  console.log("Good string");
} else {
  console.log("Not a good string");
}

//Qs2
let num = 12;

if (num % 3 === 0 && (num + 1 == 15 || num - 1 == 11)) {
  console.log("safe");
} else {
  console.log("unsafe");
}

// Alerts
console.log("This is a console log");
console.error("This is an error message");
console.warn("This is a warning message");

// prompts
let roll = prompt("Enter your roll number:");
console.log("Your roll number is:", roll);
