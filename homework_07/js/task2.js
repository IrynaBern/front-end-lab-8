let game = confirm("Do you want to play a game?");
if(game == false) {
	console.log("You did not become a millionaire");
}
else{
	let min = 0, max = 5;
	const attempts = 3;	
	let maxPrize = 10;
	let secretNumber;
	let gamePrize = 0;
	while(true){	
	secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	//console.log(secretNumber);// згенероване випадкове число
	let currentPrize = maxPrize;
	let continueGame = false;
	let guessAttempts = false;
	for (let i = 1; i <= attempts; i++)	{
		let numberGame = prompt("Enter a number from " + min + " to " + max + 
					  "\nAttempts left: " + (attempts - i + 1) + 
					  "\nTotal prize: " + (gamePrize) + "$" +
					  "\nPossible prize on current attempt: " + currentPrize + "$\n" , "");
		if(numberGame != "" && numberGame != null && 
		(numberGame.charAt(0) != 0 || Number(numberGame) == 0)  && 			//валідація введених даних
		numberGame.indexOf(".") == -1 && (numberGame = Number(numberGame)) != NaN){
		numberGame = parseFloat(numberGame);
		if(Number.isInteger(numberGame) && numberGame >= min && numberGame <= max){
				if( numberGame == secretNumber){
				gamePrize += currentPrize;
				guessAttempts = true;
				game = confirm("Do you want continue a game?");
					if(game) { 
					maxPrize *= 3;
					max *= 2;
					continueGame = true;
					}
				break;
			}
		}
		}
		currentPrize = Math.floor(currentPrize / 2);
	}
	if (!guessAttempts) {
		gamePrize = 0;} //анулюємо приз після 3-го невгадування
	if(!continueGame){
		console.log("Thank you for a game. Your prize is: " + gamePrize + "$"); //якщо не продовжуємо, то забираємо приз
		game = confirm("Do you want to play again?"); // зіграти знову?
		if(game) {
			min = 0;
			max = 5;
			maxPrize = 10;
			gamePrize = 0;
		}
		else { break;}
	}
 	}
}