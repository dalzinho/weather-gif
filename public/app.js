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
		console.log(returnedObject);
		showWeatherInfo(returnedObject);

		var sometext = ".list.weather.description";
	}

	var showWeatherInfo = function(weatherObject){
		var h1 = document.querySelector('#cityname');
		h1.innerText = weatherObject.city.name;
	}

	var app = function(){


		var weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APIKEY=b319899fc6ddf6c46f1fdbbbb0b52185"
		var weather = makeRequest(weatherUrl, requestComplete);

		console.log(weather);
	}

	window.onload = app;