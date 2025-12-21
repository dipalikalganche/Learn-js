//what is difference between let,var and const?

// let name = "dipali";

// let name ="shahji"

// console.log("outside the scope", name);
// let name = "dipali";
// function demo() {
//   let name = "shahaji";
//   console.log("first", name);
// }

// console.log("first", name); // what is ouptut
// demo();

// let fName = "shahaji"; // intialisationalation

// let name; // declaration

// name = "dipali"; // assign

// let and const

// let name = "kalganche";
// name = "kokane";
// console.log("name", name);

// const fname = "shahaji";
// fname = "dipali";

// console.log(name);

// --- let const have block scope 2) let we can assigned new value but can not intialise same varaible in the scopr

//const example to understand
// Block Scope
// const PI = 3.14;
// if (true) {
//   const PI = 3.14159;
// }
// console.log(PI); // ReferenceError: PI is not defined

//Reassignment;
// const GREETING = "Hello";
// GREETING = "Hi"; // TypeError: Assignment to constant variable.

// Mutability
// const CONFIG = { port: 8080 };
// CONFIG.port = 3000; // This is allowed. CONFIG still points to the same object.
