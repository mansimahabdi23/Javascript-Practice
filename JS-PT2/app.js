// Literals

let pencilPrice = 10;
let eraserPrice = 5;

// console.log("total price is:", pencilPrice + eraserPrice, " Rupees. ");

console.log(`Your total pay is ${pencilPrice + eraserPrice} rupees`);

// ===================== PRACTICE QUESTION =======================
// for traffic signal
let color = "red";
if (color === "red") {
  console.log("Stop! Light color is red");
}

if (color === "yellow") {
  console.log("Slow down! Light color is yellow");
}

if (color === "green") {
  console.log("Go! Light color is green");
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
