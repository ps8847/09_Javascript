// var sum = function(a) {
//     console.log("live viewers " + a);
//     var c = 4;
//     return function(b) {
//         return a + b + c;
//     }
// }

// var store = sum(2);
// console.log(store(5));


// example2

var sum = function(a, b, c) {
    return {
        getSumTwo: function() {
            return a + b;
        },
        getSumThree: function() {
            return a + b + c;
        }
    }
}

var store = sum(3, 4, 5);
console.log(store);
console.log(store.getSumTwo());
console.log(store.getSumThree());