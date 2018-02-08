var amountEuro = parseFloat(prompt("Input amount of EURO", "0"));
var amountUsd = parseFloat(prompt("Input amount of USD", "0"));

if( amountEuro <= 0 || amountUsd <=0) console.log("Incorrect data");

const euroKurs = 33.4602;
const usdKurs = 27.1196;
var euroToUan =  amountEuro * euroKurs;
var usdToUan = amountUsd * usdKurs;
var euroToUsd = euroKurs / usdKurs;

console.log(amountEuro + " euros are equal " + euroToUan.toFixed(2) + " UAH, "
			+ amountUsd + " dollars are equal " + usdToUan.toFixed(2) + 
			" UAH, one euro is equal " + euroToUsd.toFixed(2) +" dollars.");