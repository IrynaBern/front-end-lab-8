function collectIds(array){
	let newArray = [];
	let idsArray = [];
	newArray = getFilteredArray(array, function(elem){
		return elem.rating > 3.0;
	});
	idsArray = getTransformedArray(newArray, function(elem){
		with (elem)
		{
			delete title;
			delete boxart;
			delete uri;
			delete rating;
			delete bookmark;
		}
		return elem;
	});
	return idsArray;
}

