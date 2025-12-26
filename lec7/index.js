// Array;

// let marks1 = 100;
// let marks2 = 50;
// let marks3 = 70;
// let marks4 = 80;

//array makes this work easy for us
// let marks = [100,50,70,80,90];

// console.log(marks);
// console.log(marks.length);

// let arr = [100,30,"Rohit",true]; // we can store multiple type of data in same array

// console.log(arr[2]);
// console.log(typeof arr);//object type

// arr[1] = 90;//for changing value
// console.log(arr);

// push : Insert element at end
// arr.push(90);
// arr.push("Strike");

// console.log(arr);

// pop operation: Delete element from end
// arr.pop();
// console.log(arr);

// add element at first, delete the element at first place

// arr.unshift(10);
// arr.unshift(50);
// console.log(arr);

//  delete the element through
// arr.shift();
// console.log(arr);

//but shifting and unshifting may lead to complexity of program and its not a good practice

// let arr = [10,30,50,90,11];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let num of arr){
//     console.log(num);
// }

// let arr = [10, 30, 50, 90, 11];
// let arr2 = arr;
// arr2.push(30);

// console.log(arr);
// Object(non primitive): Copy by reference
//primitive :copy by value

// const arr = [10, 30, 50, 90, 11]; //we can do the changes in arr but we cannot remove array and put new arr
// arr[2] = 30;
// console.log(arr);

// const arr = [10, 30, 50, 90, 11];
// const arr2 = arr.slice(2, 4);//original array not chnge
// console.log(arr);
// const arr3 = arr.splice(1, 3, "rohit", 19);
//cut from original array and insert another into it
// console.log(arr3);

// const arr = [10, 30, 50, 90, 11];
// const arr2 = ["rohit", 11, true];
// const arr4 = [90, 4, false];
//arr.push(arr2);
// const arr3 = arr.concat(arr2);
// const arr3 = [arr, arr2, arr4];

//spread operator:gives all element individually from array
// const arr3 = [...arr, ...arr2, ...arr4];
// console.log(arr3);

// const names = ["Alice", "Bob", "Charlie", "Rohit", "Dipali"];
// console.log(names.toString());
// console.log(names.join("-"));
// console.log(names.indexOf("Bob")); //it will give us which first index will appear
// console.log(names.lastIndexOf("Bob")); //it will appear last index with the search name
// console.log(names.includes("Bob")); //whether this name is in the list or not

// names.sort();//sorting basiss of asci table
// names.reverse();
// console.log(names);

// const a = [101, 90, 80, 32, 91]; //treat as a character bcz arr contains all type of data
// const arr = [10, "Rohit", "Mohan", true];
// console.log(arr);

// const arr = [10, 40, 31, 71, 5, 11];
// arr.sort((a, b) => a - b);
//comparison and ascending order

// arr.sort((a, b) => b - a);

// 10, 31, 40;
// a = 40;
// b = 31;

//-ve : first a then b
//+ve: b first then a
// console.log(arr);

//const arr = [10, 30, 50, [40, 90, [60, 19, 99], 11], 80]; //2d and 3 d array
// console.log(arr[3][0]); //this is for if we have to access from this 40th number it will again treat as 0th index
// console.log(arr[3][2][1]); //3d array

//const a = arr.flat(Infinity); //here we have to defined how much level we have to go
//  console.log(a);

const a = [10, 309, "Rohit", 9.3, true];
a.name = "Mohan"; //here array also accepting key value pairs
console.log(a);
