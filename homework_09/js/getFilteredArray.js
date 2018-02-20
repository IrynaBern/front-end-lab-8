function getFilteredArray(array, predicateFunction)
{
	let newArray = [];
	forEach(array,function(elem){
		if(predicateFunction(elem)){
			newArray.push(elem);
		}
	});
	return newArray;
}