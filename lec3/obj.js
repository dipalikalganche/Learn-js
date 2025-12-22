//Todays learning
//primitive , non primitive ,object

//primitives are immutable means value cannot chnge once created

//strings
// let name = "dipali";
// let greeting = "Hello, World!";
// console.log(name, greeting);

// //number
// let integerValue = 100;
// let floatValue = 3.14;
// let notANumber = NaN;
// let infinity = Infinity;
// console.log(integerValue, floatValue, notANumber, infinity);

// //boolean
// let isActive = true;
// let isComplete = false;
// console.log(isActive, isComplete);

// //vriable declared but not assigned is undefined
// let user;
// console.log(user);

// //symbol this separates both id s from each other and its unique identifier
// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(id1 === id2);

//non-primitive (object type)
//it is mutable collection of key-value pairs object works on pointer and refrence concept

//object creation
// let obj = {
//   fname: "dipali",
//   lname: "kalganche",
//   age: 21,
// };
// console.log(obj.fname, obj.lname);

// //we can also store the function into the variable note:fuc is also an object
// let s = function add() {
//   console.log("hello cutee");
// };
// //console.log(s);
//s();

//array is also mutable means we can change the first variable and ive that memory to the second one
// let num = [10, 20, 30, 40, 50];
// console.log(num[0]);

//pass by value(when we pass value value is copied)
// let a = 10;
// let b = a;
// b = 20;
// console.log(a);
// console.log(b);

//pass by reference(it points to the same location of memory )
// let obj1 = { value: 10 };
// let obj2 = obj1;
// // Both obj1 and obj2 now point to the exact same object in memory
// obj2.value = 20;
// console.log(obj1.value); // Outputs: 20 (obj1 is affected because it points to the same object)
// console.log(obj2.value);

let obj = {
  name: "mohan",
  age: 20,
};
let obj2 = obj;
obj2.name = "rohan";
console.log(obj);
//in this it modifies mohans value into the rohan bcz it pointing the same object and it can be modified
