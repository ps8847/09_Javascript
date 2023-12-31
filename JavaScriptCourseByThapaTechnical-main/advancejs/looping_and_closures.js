// 👻What is Event Loop in JavaScript ?
// // ppt explain 


// // 5️⃣ Hoisting in JavaScript 

// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.


// For Example 👇
//console.log(myName);
//var myName ;
//myName = "thapa";


// // How it will be in output during creation phase 

// var myName = undefined;
// console.log(myName);
//  myName = "thapa";


// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // instead of var. (The other difference is that variables declared 
// // with let are local to the surrounding block, not the entire function.)



// // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.


// // For Example 👇

// let a = "Hello guys. "; // global scope

// const first = () => {
//     let b = " How are you?"

//     const second = () => {
//         let c = " Hii, I am fine thank you🙏";
//         console.log(a + b + c);
//     }
//     second();
//     console.log(a + b + c); //I can't use C 
// }

// first();



// // 7️⃣ What is Closures in JavaScript 🤔

// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 👇

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//         let sum = a + b;
//         console.log(`the sum of the two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);

// // it same like lexical scoping 

// // One more Example 👇

//const outerFun = (a) => {
//    let b = 10;
//    const innerFun = () => {
//        let sum = a + b;
//        console.log(`the sum of the two no is ${sum}`);
//    }
//    return innerFun;
//}

//let checkClousure = outerFun(5);
//console.dir(checkClousure);

// "use strict"

// let x = "vinod";
// console.log(x);