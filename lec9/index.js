function greeting() {
  console.log("hello my dear friends");
  return 10;
}

// function addNumber(num1, num2) {
//   //parameter
//   const sum = num1 + num2;
//   console.log(sum);
// }

// greeting();
// addNumber(3, 4); //arguments
// addNumber(6, 7);
//here if i wanted to add many arguments we cannt add again and again in para as well as argu thats why we have

//Rest operator example is

// function addNumber(...num) {
//   let sum = 0;

//   for (let n of num) {
//     //for iterating the result
//     sum += n;
//   }

//   console.log(sum);
// }

// addNumber(6, 7);
// addNumber(6, 7, 8);
// addNumber(6, 7, 8, 9);
// addNumber(7, 8, 12, 12, 11, 12, 41, 12);

//function expression

//type1 we can do this bcz of hoisting

// console.log(addNumber(3, 4));

// function addNumber(num1, num2) {
//   return num1 + num2;
// }

//type 2
// console.log(addNumber(3, 4)); //error will occured bcz of initialiser

// const addNumber = function (num1, num2) {
//   return num1 + num2;
// };

//arrow function
// A function expression
// const multiply = function (a, b) {
//   return a * b;
// };
// console.log(multiply(5, 4));

// The same function as an arrow function
// const multiplyArrow = (a, b) => {
//   return a * b;
// };
// console.log(multiplyArrow(5, 4));

//without () for single  parameter
// const square = (x) => x * x;
// console.log(square(2));

//imeditely invoke function
// (function greeting() {
//   console.log("hello");
// })();

// (() => {
//   console.log("hii");
// })();

//callback function

// function greet() {
//   console.log("hello how are you?");
// }

// function meet() {
//   console.log("now I am free");
//   Callback();
// }

// greet(meet);

//example of zomato and blinkit

//blinkit

function blinkitOrderPlaced() {
  console.log("we have started packing ur order");
}

function zomatoOrderPlaced() {
  console.log("we have started preparing ur food");
}

function payment(amount, callback) {
  console.log(`${amount} payment has been initialised`);
  console.log("payment is received");
  callback();

  //gst
  //rider's payment
  //company's profit
}

//payment(500, zomatoOrderPlaced);
payment(300, blinkitOrderPlaced);
