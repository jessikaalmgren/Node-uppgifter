const fs = require('fs')

console.log('Skriv in ditt namn och epost')

let state = 'get name'
let name, email

process.stdin.on('data', data => {
	let string = data.toString().trim()

	if (state === 'get name'){
		name = string
		state = 'get email'
	} else if(state === 'get email'){
		email = string

		writeToFile({name, email})

		//console.log(name, email)
		state = 'done'
		process.stdin.pause()
	}
})

process.stdin.resume()

function writeToFile (object){
	fs.writeFile('./personData.json', JSON.stringify(object), err => {
		if (err)
		console.log('Kunde inte skriva till filen ' + err.message)
	})
}
//Fråga nummer 9. 


//Mitt lite mer komplicerad och felaktiga lösningsförslag nedan. Rätt är ovan. 
// let questions = [
// 	'Vad är ditt namn?', 
// 	'Vad är din email?'
// ]

// let answers = []

// function ask (i){
// 	process.stdout.write(`\n \n \n ${questions[i]}`)
// 	process.stdout.write(' > ')
// }

// process.stdin.on('data', function(data){
// 	answers.push(data.toString().trim())
// 	if (answers.length < questions.length){
// 		ask(answers.length)
// 	}else {
// 		fs.writeFileSync('./personData.json', JSON.stringify(answers, null, 2))
// 		console.log(answers)
// 		process.exit()
// 	}
	
// })

// ask(0)



// \n