const companies = [
    { name: "google", category: "product based", start: 1981, end: 2004 },
    { name: "amazon", category: "product based", start: 1992, end: 2008 },
    { name: "paytm", category: "product based", start: 1999, end: 2007 },
    { name: "tcs", category: "service based", start: 1989, end: 2010 },
    { name: "accentre", category: "service based", start: 1989, end: 2010 }
];

const ages = [33, 32, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// foreach

//for (let i = 0; i <= companies.length - 1; i++) {
//    console.log(companies[i].name);
//}


//companies.forEach(function(company, index) {
//    //console.log(index);
//    console.log(company);
//})

//companies.forEach((company, index) => (console.log(company.name)));




//filter

// for (let i = 0; i <= ages.length; i++) {
//     if (ages[i] >= 20) {
//         console.log(ages[i]);
//     }
// }

// const ageee = ages.filter(function(age) {
//     if (age >= 20) {
//         return true;
//     }
// })

// console.log(ageee);

// const finalage = ages.filter((age, index) => age >= 30)
// console.log(finalage);

// example 2

// const sb = companies.filter(function(company) {
//     if (company.category === "service based") {
//         return true;
//     }
// })

// console.log(sb);


// const sb = companies.filter(company => company.category === "service based")
// console.log(sb);



// map fucntion

// const dummy = companies.map((company, index) => {
//     return `${company.name} ${company.category}`
// })
// console.log(dummy);


// sort

// const sorted = companies.sort(function(c1, c2) {
//     if (c1.start < c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// })
// console.log(sorted);


// const sorted = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
// console.log(sorted);

// const sortedages = ages.sort((a, b) =>(b - a));
// console.log(sortedages)

// reduce

// let total = 0;
// for (let i = 0; i < ages.length; i++) {
//     total += ages[i];
// }
// console.log(total);

 const sumage = ages.reduce(function(total, age) {
     return total + age;
 }, 0)
 console.log(sumage);


//const sumage1 = ages.reduce((total, age) => total + age, 0);
//console.log(sumage1)