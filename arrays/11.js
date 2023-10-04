// var myfr = new Array;   //not mandatory
var myfr = ['ramesh', 22, "male"]; //can add anything


// //traversal
// console.log(myfr[0]);
// console.log(myfr.length);


// // .. it provides index numbers
// for (let elements in myfr) {
//     console.log(elements)
// }

// // it provides elements
// for (let elements of myfr) {
//     console.log(elements)
// }
// var myfr1 = ["hello", "world", "how", "are", "you"];
// myfr1.forEach(function(element, index, array) {
//     console.log("element :" + element + " index : " + index + ", array = " + array);
// });



// // searching and filter
//var myfr1 = ["hello", "world", "how", "are", "you", "world"];
// console.log(myfr1.indexOf("world"));
// console.log(myfr1.indexOf("world", 3));

// console.log(myfr1.lastIndexOf("world"));

// console.log(myfr1.includes("are"));

// const prices = [200, 404, 300, 350, 400, 500, 600];
// console.log(prices.find((currVal) => currVal > 400));

// console.log(prices.findIndex((currVal) => currVal > 400));


 const prices1 = [200, 300, 350, 400, 450, 500, 600];
 const newPriceTag = prices1.filter((elem, index) => {
     return elem > 400;
 })
 console.log(newPriceTag);


// const animals = ['pigs', 'goats', 'sheep'];
// animals.push('chicken');
// console.log(animals);

// animals.unshift('chicken');
// console.log(animals);

// animals.pop('chicken');
// console.log(animals);

// animals.shift('chicken');
// console.log(animals);

// //splice

// const months = ["jan", "feb", "mar", "apr"];

//// // used for add,update,delete

//// // splice ( index, no of data we want to delete,add,update,delete,  "data")
// const updmonth = months.splice(1, 1, "march");
// console.log(months);


// console.log("map and reduce")

// const array1 = [1, 4, 7, 8, 3, 1.3, 5];

// let newarr = array1.map((elem, index, arr) => {
//     return elem > 3
// })
// console.log(array1)
// console.log(newarr)


// let arr = [25, 36, 49, 64, 81];

// let arrsqr = arr.map((curelem) => {
//     return Math.sqrt(curelem);
// })
// console.log(arrsqr)


// let arr = [2, 3, 4, 6, 8];

// let arr2 = arr.map((currelem) => {
//     return currelem * 2;
// }).filter((currelem) => {
//     return currelem >= 8;
// })

// console.log(arr2)



//reduce

//accuemulator is a container 
// let arr = [5, 6, 2];
// let sum = arr.reduce((accumulator, curelem, index, arr) => {
//     return accumulator += curelem;
// })

// console.log(sum);

//same example with one already value
// let arr = [5, 6, 2];
// let sum = arr.reduce((accumulator, curelem, index, arr) => {
//    console.log("accumulator is : " , accumulator);
//    console.log("curre;em is : " , curelem);
//     return accumulator += curelem;
// })

// console.log(sum);


// let arr = [2, 3, 4, 6, 8];

// let arr2 = arr.map((currelem) => {
//    console.log("currelem is : ", currelem);
//     return currelem * 2;
// }).filter((currelem) => {
//    console.log("currelem filter is : ", currelem);
//     return currelem > 10;
// }).reduce((accumulator, curelem) => {
//    console.log("accumulator is : ", accumulator);
//    console.log("currelem in accumulator is : ", curelem);
//     return accumulator += curelem;
// })

// console.log(arr2)




//2d array to glat

//const ar = [
//    ['zone1', 'zone2'],
//    ['zone3', 'zone4'],
//    ['zone5', 'zone6']
//];

//let flatarr = ar.reduce((accum, currval) => {
//    return accum.concat(currval);
//})

//console.log(flatarr)


//splice
//it will change the original array
//syntax: array_name.splice(start,deletecount,replacevalues)

////delete all from index 2
//var geeks = [11,22,33,44,55];
//geeks.splice(2);
//console.log(geeks);

////delete 1 value from index 2
//var geeks = [11,22,33,44,55];
//geeks.splice(2 , 1);
//console.log(geeks);

//add element at particular location
//var geeks = [11,22,33,44,55];
//geeks.splice(2 , 0 , 99);
//console.log(geeks);

////add multiple element at particular location
//var geeks = [11,22,33,44,55];
//geeks.splice(2 , 0 , 99 , 199 , 210);
//console.log(geeks);

////update one element at particular location
//var geeks = [11,22,33,44,55];
//geeks.splice(2 , 1 , 99);
//console.log(geeks);

////update multiple element at particular location
//var geeks = [11,22,33,44,55];
//geeks.splice(2 , 3 , 99 , 199 , 210);
//console.log(geeks);


//Slice 

//update multiple element at particular location
var geeks = [11,22,33,44,55];
console.log(geeks.slice(1,3));