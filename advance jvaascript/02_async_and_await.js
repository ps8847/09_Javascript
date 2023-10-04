// async finction

/*

synatx  : 
	async function test(){                          ----> is made to less the complications of Promise() (es7)
													---->   Promise () es6
	}

*/

// await

// in which line we will apply "await" , it will not go further after this code.

//example 

/*
	async function test(){
		console.log("A")
		await console.log("B")
		console.log("C")
	}

	test();
	console.log('D')
	console.log('E')
*/