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
