// ES7 features 

// // 1: array include 
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);

// // 2: **
// console.log(2 ** 3);



// ES8 Features 

// String padding

// Object.values()
// Object.entries()

// const message = "my name is vinod";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));


// const person = { name: 'Fred', age: 87 };

// console.log(Object.values(person));
// const arrObj = Object.entries(person);
// console.log(Object.fromEntries(arrObj));



// ES2018

// const person = { name: 'Fred', age: 87, degree: "mcs" };
// const sPerson = {...person };

// console.log(person);
// console.log(sPerson);


// ES2019
// Array.prototype.{flat,flatMap}
// Object.fromEntries()

/* var arr = [10, 20, 30, 40, , [50, 60, [1, 2, 3]],
    [70, 80, 90]
];
arr = arr.flat(); // works for single depth   // can provide the depth as paraeter // or infinity
console.log(arr);

*/

var arr = ["welcome to", "javascript", "programming language"];
// arr = arr.map((el) => {
//     return el.split(" ");
// })
// arr = arr.flat();

arr = arr.flatMap((el) => {
    return el.split(" ");
})


console.log(arr);


// ES2020
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(9007199254740991 + 12);

// const newNum = 9007199254740991 + 12;

// console.log(newNum);
// console.log(typeof newNum);


// const foo = null ? ? 'default string';
// console.log(foo);

// ES2014

// "use strict";

// x = 3.14; 
// console.log(x);