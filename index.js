const sanitize = require('sanitize-html');
const fun = require('./module.js')

function printSafe(){
	const testData1 = 'This is a safe string'
	const sanitized = sanitize(testData1)
	console.log(sanitized)
}

function printUnSafe(){
	const testData2 = 'This is a <strong>unsafe</strong> string, because it contains HTML'
	const sanitized = sanitize(testData2, {
		allowedTags: [],
		allowedAttributes: {}
	})
	console.log(sanitized)
}


printUnSafe()
fun()

//Detta är svaret på fråga nummer 3. 
