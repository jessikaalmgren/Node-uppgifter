const fs = require('fs')

fs.readFile('./personData.json', (err, data) =>{
	if (err) {
		console.log('Det gick inte att läsa filen' + err.message)
		return
	}
	let objekt = JSON.parse(data)
	console.log('Namn: ' + objekt.name)
	console.log('Email: ' + objekt.email)	
})
//Fråga nummer 8. 




//Mitt första förslag på kod nedan. Det som var rätt ovan. 

// let one = fs.readFile('./personData.json', 'utf8',  (err, data) => {
// 	console.log('File is read')
// 	if(err) {
// 		console.log('An error occured: ' + err.message)
// 	}else{
// 		console.log(JSON.parse(data))
// 		//Konverterar strängen till ett Javascript objekt och skriver ut det i terminalen. 
// 	}
// })

// const stream = fs.createReadStream('./personData.json', 'utf8')
// stream.on('data', function(del){
// 	console.log('Ny del')
// 	console.log(del)
// })
// //Svaret på 8b*
