            //          Promise()

			//resolve()               reject()

			//then()                  catch()




// syntax

// 1.    let prom = new Promise()

// 2.    let prom = new Promise(function(){

//       })


// 3.    let prom = new Promise(function(resolve,reject){

//       });

// 4. let prom = new Promise(function(resolve,reject){
//			if(condition){
//				resolve()
//			} else {
//				reject()
//			}
//		})


// short example for complete syntax

/*
let prom = new Promise(function(resolve,reject){
	if(condition){
		resolve('Here is a Success')
	} else {
		reject('Here is a Failure')
	}
})

prom.then(onfulfilment)
prom.catch(onRejection)

let onfulfilment = (result) => {
	console.log(result);
}
let onRejection = (error) => {
	console.log(error);
}

*/



// promise.all()

/*
  Promise()          Promise()         Promise()
              \            |            /
			   \           |           /
			    \          |          /
			     \_________|_________/ 
					 Promise.all()
                 /                 \
           resolve()             reject()
                |                   |
 if all promise resolve       if all promise reject
                |                   |
			then() 				catch()



	syntax :

	let p1 = new Promise(function(resolve , reject){
		console.log("First Promise")
		resolve("First")
	})
	let p2 = new Promise(function(resolve , reject){
		console.log("Second Promise")
		resolve("Second")
	})

	Promise.all([p1,p2]).then().catch()
*/