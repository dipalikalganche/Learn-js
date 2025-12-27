//object is key value pair
// const user = {
//   name: "Rohit",
//   age: 20,
//   emailId: "dipali@gmail.com",
//   amount: 3400,
//   "home address": "hadapsar", //rarely used
// };

// console.log(user["name"]);
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);
//CRUD operation:create read update delete

// console.log(user.age);

// //update
// user.aadhar = 3456;
// user.amount = 5000;

// console.log(user);

// //delete
// delete user.emailId;
// console.log(user);

// const user = {
//   name: "Rohit",
//   age: 20,
//   emailId: "dipali@gmail.com",
//   amount: 3400,
// };

// const user2 = user;
// user2.age = 90;
// console.log(user); //user and user2 points to same memory location

// console.log(Object.keys(user)); //only keys will be print
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (let keys in user) {
//   console.log(keys, user[keys]);
// }
//user.keys //it will give us undefined bcz in user there is not key

// const user = {
//   name: "Rohit",
//   age: 20,
//   emailId: "dipali@gmail.com",
//   amount: 3400,
// };

//for of loop apply on array
// const temparr = Object.keys(user);
// console.log(temparr);
// for (let keys of Object.keys(user)) {
//   console.log(keys);
// }

// for (let values of Object.values(user)) {
//   console.log(values);
// }

// console.log(Object.entries(user));

// const name = user.name;
// const age = user.age;

//it is destructuring of object
// const { name, age } = user;

//we can change the name of variable
// const { name: userName, age: userAge } = user;

//array destructuring
// const arr = [10, 20, 40, 90, 11];
// const [first, second] = arr;
// console.log(userName, userAge);
//console.log(first, second);

// const user = {
//   name: "Dipali",
//   age: 20,
//   emailId: "dipali@gmail.com",
//   amount: 3400,
//   greeting: function () {
//     console.log(`heyy i am dipali ${this.name}`); //this stores the reference of element
//     return 20;
//   },
// };

// const user2 = {
//   name: "kalganche",
//   account: 201,
//   greeting: function () {
//     console.log(`heyy i am dipali ${this.name}`);
//   },
// };
// user2.greeting = user.greeting;

// user2.greeting();
// const va = user.greeting();
// console.log(va);

//nested object

const user = {
  name: "dipali",
  age: 20,
  emailId: "dipali@gmail.com",
  amount: 3400,
  address: {
    city: "pune",
    state: "maharashtra",
  },
};

//shallow copy
// const user2 = { ...user };//by the spread operator it created independent copy
//user2.name = "mohan";
// user2.address.city = "nashik";
// console.log(user);

//console.log(user.address.city);

//deep copy
const user2 = structuredClone(user);
user2.address.city = "nashik";
console.log(user);
