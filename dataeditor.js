const fs = require('fs')

console.log('Choose an option:')
console.log('1 View data')
console.log('2 Update data')


let answer
let state = 'get name'


	
process.stdin.on('data', data =>{
	answer = data
	if (answer == 1){
		console.log('Your answer is 1')
		fs.readFile('./personData.json', (err, data) =>{
			if (err) {
				console.log('Det gick inte att läsa filen' + err.message)
				return
		}
			let objekt = JSON.parse(data)
			console.log('Namn: ' + objekt.name)
			console.log('Email: ' + objekt.email)	
		})
	}else if(answer == 2){
		console.log('New name?')
		process.stdin.on('data', data2 => {
			let name = data2.toString().trim()
			string = name
			console.log('New email?')
			process.stdin.on('data', data3 =>{
				let email = data3.toString().trim()
				string = email
				state = 'get email'
				writeToFile({name, email})
				console.log({name, email})
			})
			
		}) 
	} else if (state == 'get email'){
		console.log('done')
	}

})
function writeToFile (object){
	fs.writeFile('./personData.json', JSON.stringify(object), err => {
		if (err)
		console.log('Kunde inte skriva till filen ' + err.message)
	})
}

	// process.stdin.on('data', data =>{
	// 	answer = data
	// 	if(answer == 1){
	// 		console.log('view')
	// 		state = 1
	// 	}

	// 	if(answer == 2){
	// 		console.log('New name?')
	// 		process.stdin.on('data', data =>{
	// 			name = data.toString().trim()
	// 			console.log(name)
	// 		}) 
	// 		state = true
	// 	} else if(state == true){
	// 		console.log('New email?')
	// 		process.stdin.on('data', data =>{
	// 			email = data.toString().trim()
	// 			console.log(email)
	// 		})
	// 		state = false
	// 	} else if(state == false){
	// 		console.log('done')
	// 	}
	// })
		// if(answer == 2){
		// 	console.log('New name?')
		// 	process.stdin.on('data', data =>{
		// 		if(state == 'get name'){
		// 			name = data.toString().trim()
		// 			state = 'get email'
		// 		}
			// 	if(state == 'get email'){
			// 		console.log('New email?')
			// 		email = data.toString().trim()
			// 		state = 'done'
			// 	} 
			// 	if(state == 'done'){
			// 		console.log('done')
			// 	}
			// 	helloU({name, email})
			// }) 
		//}  
		
	//})

	// function helloU(object){
	// 	fs.writeFileSync('./personData.json', JSON.stringify(object))
	// 	console.log(object)
	// }
	
	// if(state == 'get name'){

	// 	console.log('New Name?')
		
	// 	state = 'get email'
	// }
	// if(state == 'get email'){

	// 	console.log('New email?')
	// 		state = 'done'
	// 		process.stdin.on('data', data =>{
	// 			email = data.toString().trim()
				
	// 		}) 
	// }
	


	

	

// process.stdin.on('data', function(data){
// 	 answer = data.toString().trim()
// 	if (answer == 1){
// 		console.log('View')
// 	} else if( answer == 2){
// 		console.log('New name?')
// 		makeName(name)
// 		writeToFile(name)
		
// 	}else{
// 	console.log('New email?')
// 		makeEmail(email)
// 		writeToFile(email)
// 	}
// })

// function makeName(input){
// 	process.stdin.on('data', function(data){
// 		name = data.toString().trim()
// 		//console.log(name)
// 	})
// }

// function makeEmail(input){
// 	process.stdin.on('data', function(data){
// 		email = data.toString().trim()
// 		//console.log(email)
// 	})
// }












// 	answer = data
// 	if (answer == 1){
// 		console.log('Your answer is 1')
// 		fs.readFile('./personData.json', (err, data) =>{
// 			if (err) {
// 				console.log('Det gick inte att läsa filen' + err.message)
// 				return
// 		}
// 			let objekt = JSON.parse(data)
// 			console.log('Namn: ' + objekt.name)
// 			console.log('Email: ' + objekt.email)	
// 		})
// 	}else if(answer == 2){
// 		console.log('New name?')
// 		process.stdin.on('data', data => {
// 			let string = data.toString().trim()
// 			name = string
// 			console.log('New email?')
// 			process.stdin.on('data', data =>{
// 				let string2 = data.toString().trim()
// 				email = string2
// 				writeToFile({name, email})
// 				//console.log(name)
// 			})
			
// 		}) 
// 	} 
// })


// function writeToFile (object){
// 	fs.writeFile('./personData.json', JSON.stringify(object), err => {
// 		if (err)
// 		console.log('Kunde inte skriva till filen ' + err.message)
// 	})
// }