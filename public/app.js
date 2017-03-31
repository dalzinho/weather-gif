	var makeRequest = function(url, callback){
		var request = new XMLHttpRequest();
		request.open("GET", url);
		request.onload = callback;
		request.send();
	}

	var requestComplete = function(){

		if(this.status !== 200){
			return;
		}

			console.log('request complete');

		var jsonString = this.responseText;
		var returnedObject = JSON.parse(jsonString);
		return(returnedObject);
	}


	var app = function(){
		var weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&b319899fc6ddf6c46f1fdbbbb0b52185"
		var weather = makeRequest(weatherUrl, requestComplete);
	}

	window.onload = app;