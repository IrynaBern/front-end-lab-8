function getTransformedArray(array, transformFunction)
{
	let newArray = [];
	forEach(array,function(elem){
		newArray.push(transformFunction(elem));
	});
	return newArray;
}