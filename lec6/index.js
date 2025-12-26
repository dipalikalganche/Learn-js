//string
// const str1 = "dipali";
// const str2 = `dipali kalganche`;
// const day = 18;
// const str3 = `I am learning js on ${day}`; //${day} gives value in return
// console.log(str3);

//const str = `hello good morning all`;
// console.log(str.length);
// console.log(str[1]);

// str[2] = `S`;
// console.log(str); //here we are trying to change the string index but it cannot possible in js bcz string is immutable

//uppercase
// let a = str.toUpperCase();
// let b = str.toLowerCase();
// console.log(a);

//const str = `hello good morning all`;
//console.log(str.indexOf("rning"));
//console.log(str.lastIndexOf("rning"));
//console.log(str.includes("ood"));

// //slice;
//console.log(str.slice(2, 7));
//console.log(str.slice(3));
//console.log(str.slice(-5, -2)); //last elements

// const str = `Hello Coder Army Coder`;

// console.log(str.substring(2,5));//substring cannot given in a - format

// const a = "Dipali";
// const b = "Kalganche";
// const c = a+" "+b;
// console.log(c);

// console.log(24+"Dipali");
// console.log(24+"Dipali"+10);
// console.log(24+30+"Dipali");

// const str = `Hello Coder Army Coder`;

// console.log(str.replaceAll("ode",'iam'));

// const user = "  Dipali  Kalganche ";
// console.log(user.trim());

// const names = "Rohit Mohit Suraj Rohan Anjali";

// console.log(names.split(" "))
// console.log(names.split(","))

//DATE
//const now = new Date(); //obj create
//console.log(now);
//console.log(now.toString());
//console.log(now.toISOString());
//console.log(now.toLocaleString());

//local time telling syntax
//console.log(now.getDay());
//console.log(now.getDate());
//console.log(now.getFullYear());
// console.log(now.getMonth());//it will start from 0 index
// console.log(now.getHours());
// console.log(now.getSeconds());

// days: Mon-tue(1 based)
// Month: 0 1
const now = new Date(2025, 12, 26, 7, 3, 126); //inconsistent date
//console.log(now);

// console.log(now.toString());//local current time

// Timestamp
// const now = Date.now();
// const dates = new Date(1759275037293);//this is for milisec convert into time
// // console.log(dates.toString());

// console.log(dates);
// console.log(now);
// // 1759272851288: TimeStamp
