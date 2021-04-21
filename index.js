import fetch from 'node-fetch'

export class WeatherOrNot {
  constructor(apiKey) {
    this.apiKey = apiKey
    this.zip = ""
    this.cityName = ""
    this.cityID = ""
    this.lat = 0
    this.lon = 0
    this.units = 'metric'
  }

  // Get the openweather api url for this object for a specific location type
  getUrlString(locationString, locationType) {
    switch (locationType) {
      case "zip":
        locationString = `zip=${this.zip}`
        break;
      case "cityID":
        locationString = `id=${this.cityID}`
        break;
      case "geocoordinates":
        locationString = `lat=${this.lat}&lon=${this.lon}`
        break;
      case "cityName":
      default:
        locationString = `q=${this.cityName}`
    }
    return `https://api.openweathermap.org/data/2.5/weather?${locationString}&appid=${this.apiKey}&units=${this.units}`
  }

  async reqApi(url) {
    const path = url

    const res = await fetch(path)
    const json = await res.json()

    return json
  }

  weatherForCity() {
    return this.reqApi(this.getUrlString(this.cityName, "cityName"))
  }

  weatherForId() {
    return this.reqApi(this.getUrlString(this.cityID, "cityID"))
  }

  weatherForGeo() {
    return this.reqApi(this.getUrlString({ "lat": this.lat, "lon": this.lon }, "geocoordinates"))
  }

  weatherForZip() {
    return this.reqApi(this.getUrlString(this.zip, "zip"))
  }

  getWeatherUpdates(callback) {
    callback(this.weatherForZip())

    this.interval = setInterval(() => {

      callback(this.weatherForZip())

    }, 10000) //1800000
  }

  endWeatherUpdates() {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = undefined
      return "Interval Stopped Successfully"
    }
    return "No Interval to Stop"
  }
}

let w = new WeatherOrNot("b190a0605344cc4f3af08d0dd473dd25")
w.zip = "22802"
w.getWeatherUpdates((res) => {
  res.then((obj) => {
    console.log(obj)
    w.endWeatherUpdates()
  })
})