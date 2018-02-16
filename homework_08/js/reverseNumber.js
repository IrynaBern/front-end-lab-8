function reverseNumber(number)
{
	let sign = number > 0 ? 1 : -1;
	number = Math.abs(number);
	let revers = 0;
	while(number > 0)
	{
		revers *= 10;
		revers += parseInt(number % 10);
		number = parseInt(number / 10);
	}
	return sign * revers;
}
	