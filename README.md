## WeatherOrNot
### An Open Weather Map API wrapper that won't leave you in the rain.
<br>

### Clear skys are ahead. Lets get started: 
* Download [WeatherOrNot](https://www.npmjs.org) from npm

### Grab yourself an Open Weathermap API key for free!
* [https://openweathermap.org/](https://openweathermap.org/)

<br>

### Learn how to use WeatherOrNot to its fullest:
* Here are some examples to help you get started.

#### Create a WeatherOrNot object:
``` javascript
w = new WeatherOrNot('Your Api Key')
```

#### Set the location
``` javascript
// You can use a zip, cityName, cityID, or lat, lon
w.zip = "94109"
w.cityName = "San Francisco"
w.cityID = 42
w.lat = 37.76
w.lon = -122.41
```

#### Change the units
``` javascript
// You can change what units the weather is returned in:
// Weather is in metric by default
w.units = "imperial"
```

#### Get the weather
``` javascript
// You can get the weather using, zipcode, city name, city ID, and geocoordinates
// Each weather method returns a promise containing
// a javascript object filled with the weather data.
w.weatherForZip()
w.weatherForCity()
w.weatherForId()
w.weatherForGeo()
```