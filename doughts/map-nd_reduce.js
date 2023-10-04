let arr = [45, 23, 21];

//foreach 
//calls a function once for each array element
// const a = [1,2,3]
// a.foreach((value,index,array) => {
// // fuction logic
// });


// map
// creates a new array by performing some opertaions on eahc aray element

// const a = [1,2,3]
// a.map((value,index,array) => {
// // fuction logic
// });
// example:-

let arrr = [45, 23, 21]
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})
console.log(a)




//filter
//filter an array with values that passes a test creates a new array
// const a = {1,2,3,4,5}
// a.flter(greater than 5)

// example : - 
let arr2 = [445, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
    return a < 10
})
console.log(a2)



// reduce method

let arr3 = [1, 2, 3, 5, 2, 1]
let newarr3 = arr3.reduce((h1, h2) => {
    return h1 + h2
})
console.log(newarr3)