let number = parseInt(prompt("Please, enter natural number N (0<N<=20)", "1"));
if(number != null && number != NaN && number > 0 && number <= 20) {
	let  item = "[~]";
	let  space = "   ";
	let piramida = "";
	for(let i = 1; i <= number; i++)
	{
		for(let j= i; j<= number - 1; j++){
			piramida += space;
		}
		for (let j = 1; j <= i + (i - 1); j++){
			piramida += item;
		}
		piramida += "\n"
	}
	console.log(piramida);
	}
else{
	console.error("Incorrect!");
	}