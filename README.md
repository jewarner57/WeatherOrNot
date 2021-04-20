## WeatherOrNot
### An Open Weather Map API wrapper that won't leave you in the rain.
<br>

### Clear skys are ahead. Lets get started: 
* [Download WeatherOrNot on npm](https://www.npmjs.org)

### Get yourself an Open Weather API key for free!
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
w = new WeatherOrNot('Your Api Key')
// You can use a zip, cityName, cityID, or lat, lon
w.zip = "94109"
w.cityName = "San Francisco"
// ...
```
### Get the weather
``` javascript
w = new WeatherOrNot('Your Api Key')
// You can use a zip, cityName, cityID, or lat, lon
w.zip = "94109"
w.cityName = "San Francisco"
// Get the weather
w.weatherForZip() => {local weather}
w.weatherForCity() => {local weather}
```
