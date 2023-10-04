// var MyName = "thapa technical";
// console.log(MyName);

// MyName = "Youtube channel"
// console.log(MyName);

// let MyName1 = "thapa technical";
// console.log(MyName1);

// MyName1 = "Youtube channel"
// console.log(MyName1);


// const MyName2 = "thapa technical";
// console.log(MyName2);

// MyName2 = "Youtube channel"
// console.log(MyName2);


//scope

function biodata() {
    var fname = "prince"
    console.log(fname);

    if (true) {
        var lname = "sharma";
        console.log("inner " + lname);
        console.log("inner " + fname);
    }
    console.log("innerouter " + fname);
}

// console.log(" outside function ", fname);

biodata();