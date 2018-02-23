 function debounce(callbackFunction, delay)
 {
	var timeoutID = null;
	return function(){
		if (timeoutID)
			{
				clearTimeout(timeoutID);
			}
		timeoutID = setTimeout(callbackFunction, delay);
	};
 }