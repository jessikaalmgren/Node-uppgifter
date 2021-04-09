let answer
let guess = 0

function getRandomInt(min=1, max=100) {
	 return Math.floor(Math.random() * Math.floor(max)) + min;
	
  }

let number = getRandomInt()
console.log(number)

console.log('** Welcome to guess the number! **')

console.log('Please enter a number between 1 and 100.')

// function amountOfGuesses(){
// 	if(answer){
// 		answer = guess++
// 		return guess
// 	}
// }

process.stdin.on('data', data =>{
	answer = data
	if(answer == number ){
		guess = 1
		guess++
		console.log('Correct! You win in ' + guess + ' guesses')
		
	} else if(answer != number && answer < number){
		
		guess++
		console.log('Too low! ' + guess + ' guess')
	} else if(answer != number && answer > number){
		guess++
		console.log('Too high! ' + guess + ' guesses')
	}
})