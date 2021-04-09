const fs = require('fs')
const person = require('./personData.json')

const result = fs.readFileSync('./personData.json', {
	encoding: 'utf8'
})
console.log(result)
//Skriver ut som sträng. 

console.log(JSON.parse(result))
//Skriver ut som objekt. 

person.name = 'Jessika'
//Lägger till ett nytt namn. 

fs.writeFileSync('./personData', JSON.stringify(person))
console.log(person)
//Skickar ny data till personData.json samt gör om den datan som ska skickas så att den skickas som en sträng och inte objekt. Fråga nummer 7. 


// let newName = 'name: Jessika'
// fs.writeFile('./personData.json', newName, (err) => {
//     // throws an error, you could also catch it here
//     if (err) throw err;

//     // success case, the file was saved
//     console.log('Name saved!');
// }); //Denna var inte bra då den raderade innehållet jag redan hade skrivit till endast det nya namnet. Bra att spara och ha men det var inte den jag ville ha. 

//const objekt = JSON.parse(result)
//Konverterar result strängen till ett objekt. Lägger den i variabeln objekt.  



//console.log(objekt.name)
//Skriver ut namnet på objektet. 


