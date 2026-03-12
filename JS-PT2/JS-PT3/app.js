// let msg = "       hello         ";
// let password = prompt("Set your password");
// let newPass = password.trim();
// console.log(password);

// Arrays
let student = ["John", "Jane", "Doe"];
// mutable arrays
student[0] = "Jack";
console.log(student);
student[10] = "Smith";
console.log(student);

//push
student.push("Emily");
console.log(student);
//pop
student.pop();
console.log(student);
//unshift
student.unshift("Michael");
console.log(student);
student.unshift("Sarah");
console.log(student);
//shift
student.shift();
console.log(student);