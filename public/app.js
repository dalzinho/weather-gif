	var weatherType = null;
	var gifUrl = null;

	var makeRequest = function(url, callback){
		var request = new XMLHttpRequest();
		request.open("GET", url);
		request.onload = callback;
		request.send();
	}

	var handleWeatherRequest = function(){

		if(this.status !== 200){
			return;
		}

		var jsonString = this.responseText;
		var returnedObject = JSON.parse(jsonString);
		showWeatherInfo(returnedObject);

		weatherType = returnedObject.weather[0].description;

		var gifSearch = weatherType.split(' ')[0] + '+' + weatherType.split(' ')[1];

		console.log(gifSearch);

		gifUrl = "http://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=dc6zaTOxFJmzC";
	}

	var handleGifRequest = function(){
				if(this.status !== 200){
			return;
		}

		console.log('request complete');

		var jsonString = this.responseText;
		var returnedObject = JSON.parse(jsonString);
		showGif(returnedObject);
	}

	var showWeatherInfo = function(weatherObject){
		var h1 = document.querySelector('#cityname');
		var p = document.querySelector('#weather-description')
		h1.innerText = "";
		h1.innerText = weatherObject.name;
		p.innerText = "";
		p.innerText = weatherObject.weather[0].description;

	}

	var showGif = function(gifObject){
		var gifDiv = document.querySelector('#weather-gif');
		gifDiv.innerHTML = "";
		gifDiv
		var img = document.createElement('img');
		var randomnumber = Math.floor((Math.random() * gifObject.data.length) + 1);
		var gif = gifObject.data[randomnumber].images.original.url;
		img.src= "";
		img.src = gif;
		gifDiv.appendChild(img);
		body.setAttribute('background', gif);
	}

	var handlePress = function(event){
			if(event.which==13){
				var weatherUrl="http://api.openweathermap.org/data/2.5/weather?q=" + this.value + "&APIKEY=b319899fc6ddf6c46f1fdbbbb0b52185"
				makeRequest(weatherUrl, handleWeatherRequest);
				setTimeout(function(){
			makeRequest(gifUrl, handleGifRequest)}, 1000);
			}
	}

	var app = function(){
		// var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Glasgow,uk&APIKEY=b319899fc6ddf6c46f1fdbbbb0b52185"
		// makeRequest(weatherUrl, handleWeatherRequest);
		// setTimeout(function(){
		// 	makeRequest(gifUrl, handleGifRequest)}, 1000);

		var searchInput = document.querySelector('#search-input');
		
		searchInput.onkeypress = function(event){
			if(event.which==13){
			var weatherUrl="http://api.openweathermap.org/data/2.5/weather?q=" + this.value + "&APIKEY=b319899fc6ddf6c46f1fdbbbb0b52185"
				makeRequest(weatherUrl, handleWeatherRequest);
				setTimeout(function(){
			makeRequest(gifUrl, handleGifRequest)}, 1000);
			

			}
		};
		//local storage last viewed location?
	}

	window.onload = app;