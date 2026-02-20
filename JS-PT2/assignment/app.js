// Q1 Create anumber variable num with some value.Now,print“good”if the number is divisible by 10 and print“bad”if it is not.

let num = 5;
if (num % 10 === 0) {
  console.log("good");
} else {
  console.log("bad");
}

// Qs2.Taketheuser'sname&ageasinputusingprompts.Thenreturnbackthefollowingstatementtotheuserasanalert(bysubstitutingtheirname&age):nameisageyearsold.

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
alert(name + " is " + age + " years old");

// Qs3. Writeaswitchstatementtoprintthemonthsinaquarter.MonthsinQuarter1:January,February,MarchMonthsinQuarter2:April,May,JuneMonthsinQuarter3:July,August,SeptemberMonthsinQuarter4:October,November,December
let quarter = 1;
switch (quarter) {
  case 1:
    console.log("January, February, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, August, September");
    break;
  case 4:
    console.log("October, November, December");
    break;
  default:
    console.log("Invalid quarter");
}

// Qs4.Astringisagoldenstringifitstartswiththecharacter‘A’or‘a’andhasatotallengthgreaterthan5.Foragivenstringprintifitisgoldenornot
let str = "Apna College";
if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
  console.log("Golden string");
} else {
  console.log("Not a golden string");
}

// Q5. wap to find the largest of 3 numbers
let a = 10,
  b = 20,
  c = 15;
if (a > b && a > c) {
  console.log("Largest number is: " + a);
} else if (b > a && b > c) {
  console.log("Largest number is: " + b);
} else {
  console.log("Largest number is: " + c);
}

// Qs6(Bonus).Writeaprogramtocheckif2numbershavethesamelastdigit.Eg:32and47852havethesamelastdigiti.e.2
let num1 = 32;
let num2 = 47852;
if (num1 % 10 === num2 % 10) {
  console.log("Numbers have the same last digit");
} else {
  console.log("Numbers do not have the same last digit");
}
