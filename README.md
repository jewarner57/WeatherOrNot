![npm (scoped)](https://img.shields.io/npm/v/@jewarner57/weatherornot)
![NPM](https://img.shields.io/npm/l/@jewarner57/weatherornot)
![GitHub issues](https://img.shields.io/github/issues/jewarner57/weatherornot)

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
w.lon = -122.41
w.lat = 37.76
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
// Weather objects return a promise containing weather data
w.weatherForZip()
w.weatherForCity()
w.weatherForId()
w.weatherForGeo()

// Example Response Object:
{
  coord: { lon: -122.4186, lat: 37.7917 },
  weather: [
    { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }
  ],
  base: 'stations',
  main: {
    temp: 13.15,
    feels_like: 12.06,
    temp_min: 10,
    temp_max: 16.11,
    pressure: 1012,
    humidity: 59
  },
  visibility: 10000,
  wind: { speed: 8.75, deg: 280, gust: 12.86 },
  clouds: { all: 20 },
  dt: 1619042969,
  sys: {
    type: 1,
    id: 5817,
    country: 'US',
    sunrise: 1619011538,
    sunset: 1619059833
  },
  timezone: -25200,
  id: 0,
  name: 'San Francisco',
  cod: 200
}
```