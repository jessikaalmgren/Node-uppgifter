const fs = require('fs')

console.log('What is your name?')

let state = 'get name'
let name

process.stdin.on('data', data => {
	let string = data.toString().trim()

	if (state === 'get name'){
		name = string
	} else{
		console.log('Det funkade inte')

		writeToFile({name})

		//console.log(name)
		state = 'done'
		process.stdin.pause()
	}
	process.stdin.resume()
	console.log('Welcome ' + name)
	process.exit()
})
//Fråga nummer 10. 