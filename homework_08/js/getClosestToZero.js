function getClosestToZero()
{
	if( arguments.length == 0)
	{
		return undefined;
	}
	let closest = Number.MAX_VALUE;
	let pos = -1;
	for(let i = 0; i < arguments.length; i++)
	{
		if(Math.abs(arguments[i]) < closest)
		{
			closest = Math.abs(arguments[i]);
			pos = i;
		}
	}
	return arguments[pos];
}
		