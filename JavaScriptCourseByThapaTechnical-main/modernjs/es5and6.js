// 👻 Now It's Time for Modern JavaScript 😍😍 

// 🙏🙏 Features of ECMAScript 2015 also known as ES6 🙏🙏

// 1️⃣ LET VS CONST  vs  VAR

// var myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);

// let myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);


// const myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);



 function biodata() {
     const myFirstName = "Vinod";
     console.log(myFirstName);

     if (true) {
         const myLastName = "thapa";
     }

     console.log('innerOuter ' + myLastName);
 }

 // console.log(myFirstName);

 biodata();


// var => Function scope 
// let and const => Block Scope 





// 2️⃣ Template literals (Template strings) 

// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8 
//   8 * 2 = 16(8*2)
//  => 8 * 10 = 80

// for (let num = 1; num <= 10; num++) {
//     let tableOf = 12;
//     // console.log(tableOf + " * " + num + " = " + tableOf * num);
//     console.log(` ${tableOf} * ${num} = ${tableOf * num}`);

// }








// 3️⃣  Default Parameters
// Default function parameters allow named parameters to be 
// initialized with default values if no value or undefined is passed.

// function mult(a,b=5){
//   return a*b;
// }

// console.log(mult(3));




// 4️⃣ Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

//  ➡ Array Destructuring  🏁

// const myBioData = ['vinod', 'thapa', 26];

// var myFName = myBioData[0];
// var myLName = myBioData[1];
// var myAge = myBioData[2];

// [myFName, myAge, myLName] = myBioData;
// console.log(myAge);

// we can add values too 

// let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
// console.log(myDegree);



// ➡ Object destructuring 🏁
// const myBioData = {
//     myFname: 'vinod',
//     myLname: 'thapa',
//     myAge: 26
// }

// let age = myBioData.myAge;
// myFname = myBioData.myFname;

// let { myFname, myLname, myAge, myDegree = "MCS" } = myBioData;
// console.log(myLname);





// 5️⃣ Object Properties 

// ➡ we can now use Dynamic Properties 


// let myName = "vinod";
// const myBio = {
//     [myName]: "hello how are you?",
//     [20 + 6]: "is my age"
// }

// console.log(myBio);

// ➡ no need to write key and value, if both are same 

// let myName = "vinod thapa";
// let myAge = 26;

// const myBio = { myName, myAge }

// console.log(myBio);



// 6️⃣ Fat Arror Function 

// 👻 Normal Way of writing Function  

// console.log(sum()); 

// function sum() {
//   let a = 5; b = 6;
//   let sum = a+b;
//  return `the sum of the two number is ${sum}`;
// }

// 👻 How to convert in into Fat Arrow Function 

// const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

// console.log(sum()); 









// 7️⃣Spread Operator

const colors = ['red', 'green', 'blue', 'white', 'pink'];

const myColors = ['red', 'green', 'blue', 'white', 'pink', 'yellow', 'black'];
// // 2nd time add one more color on top and tell we need to write it again 
// // on myColor array too 

const MyFavColors = [...colors, 'yellow', 'black'];

console.log(MyFavColors);