
// is basically used to trivarse the value of array or any kind of datastructure which has data in it

// we us emnay other methdos also like  : 
	// while 
	// do..while()
	// for()
	// for..of()
	// for..in()
	// foreach()
	// map()

// Iterators 

var x = ['Apple' , "Orange" , "Grapes"];
let y = x[Symbol.iterator]();
y.next();
y.next();
y.next();