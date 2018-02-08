var side1 = parseFloat(prompt("Input 1-st side of triangle", "0"));
var side2 = parseFloat(prompt("Input 2-nd side of triangle", "0"));
var side3 = parseFloat(prompt("Input 3-rd side of triangle", "0"));
var result  =  (side1 <= 0 || 
				side2 <= 0 || 
				side3 <= 0 || 
				side1 + side2 <= side3 || 
				side2 + side3 <= side1 || 
				side1 + side3 <= side2) ? false : true;
				
var result3 = (result && ((side1 * side1 + side2 * side2 == side3 * side3) ||
						  (side1 * side1 + side3 * side3 == side2 * side2) ||
						  (side3 * side3 + side2 * side2 == side1 * side1))) ? true : false; //Right triangle 
var result1 = (result && (side1 == side2 && side2 == side3)) ? true : false; //Equilateral
var result2 = (result && !result1 &&(side1 == side2 || side2 == side3 || side1 == side3))? true: false; //Isosceles
var result4 = (result && !result3 && (side1 != side2 && side2 != side3 && side1 != side3)) ? true : false; //Scalene
var per = (side1 + side2 + side3) / 2;
var square = Math.sqrt(per * ((per - side1) * (per - side2) * (per - side3)));
if(!result) {
	console.log("Incorrect data");}
if(result1) {
	console.log("Type of triangle is equilateral and square is " + square.toFixed(2));}
if(result2) {
	console.log("Type of triangle is isosceles and square is " + square.toFixed(2));}
if(result3) {
	console.log("Type of triangle is right triangle and square is " + square.toFixed(2));}
if(result4) {
	console.log("Type of triangle is scalene and square is " + square.toFixed(2));}




