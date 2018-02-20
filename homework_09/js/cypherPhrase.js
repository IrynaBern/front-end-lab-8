function cypherPhrase(charactersMap, oldString)
{
	let array = oldString.split("");
	array = getTransformedArray(array, function(elem){
		for( let prop in charactersMap)
		{
			if (prop === elem)
			{
				elem = charactersMap[prop];
			}
		}
	return elem;
	});
	return array.join("");
}