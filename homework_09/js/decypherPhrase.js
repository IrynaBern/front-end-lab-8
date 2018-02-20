function decypherPhrase(charactersMap, oldString)
{
	let temp;
	for( let prop in charactersMap)
	{
		temp = prop;
		prop = charactersMap[prop];
		charactersMap[prop] = temp;
	}
	return cypherPhrase(charactersMap, oldString);
}