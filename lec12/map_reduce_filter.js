//map is used to transform

//const arr = [5, 1, 3, 2, 6];

//double - [10,2,6,4,12]
//triple - [15,3,9,6,18]
//binary - ["101","1","11","10","110"]

//this is transformation logic

// function double(x) {
//   return x * 2;
// }
// function triple(x) {
//   return x * 3;
// }

// function binary(x) {
//   return x.toString(2);
// }
// const output = arr.map(binary);
// console.log(output);

// also we can write like this bcz according to highter order function we can pass function as parameter
// const output = arr.map(function binary(x) {
//   return x.toString(2);
// });
// console.log(output);

//in case of arrow function (in this we can remove return keyword still it will gives us same output)
// const output = arr.map((x) => x.toString(2));
// console.log(output);

//FILTER()

// const arr = [5, 1, 3, 2, 6];

//filter odd values

// function isOdd(x) {
//   return x % 2;
// }
// const output = arr.filter(isOdd);
// console.log(output);

// function isEven(x) {
//   return x % 2 === 0;
// }
// const output = arr.filter(isEven);
// console.log(output);

// const output = arr.filter((x) => {
//   return x > 4;
// });
// console.log(output);

//REDUCE()
//iterate each and evry element of array and acc is stands for sum here and current represent vakue inside reduce function
// const arr = [5, 1, 3, 2, 6];

//to find sum or max number in array

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));

// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output);

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr));

// const output = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);
// console.log(output);

const users = [
  { firstName: "Dipali", lastName: "Kalganche", age: 20 },
  { firstName: "Amit", lastName: "Sharma", age: 35 },
  { firstName: "Neha", lastName: "Patil", age: 22 },
  { firstName: "Sneha", lastName: "Kulkarni", age: 20 },
];

//we will using map here
// const output = users.map((x) => x.firstName + " " + x.lastName);
// console.log(output);

//users having particular  unique age using reduce bcz of unique
// acc= { 20 :2 ,35:1,22:1}
const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);
