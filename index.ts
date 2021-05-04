import fetch from 'node-fetch'

class WeatherOrNot {
  apiKey: string
  zip: string
  cityName: string
  cityID: string
  lat: number
  lon: number
  units: string
  interval: any

  constructor(apiKey: string) {
    this.apiKey = apiKey
    this.zip = ''
    this.cityName = ''
    this.cityID = ''
    this.lat = 0
    this.lon = 0
    this.units = 'metric'
  }

  // Get the openweather api url for this object for a specific location type
  getUrlString(locationType: string): string {
    let locationString: string = ''

    switch (locationType) {
      case 'zip':
        locationString = `zip=${this.zip}`
        break;
      case 'cityID':
        locationString = `id=${this.cityID}`
        break;
      case 'geocoordinates':
        locationString = `lat=${this.lat}&lon=${this.lon}`
        break;
      case 'cityName':
      default:
        locationString = `q=${this.cityName}`
    }
    return `https://api.openweathermap.org/data/2.5/weather?${locationString}&appid=${this.apiKey}&units=${this.units}`
  }

  async reqApi(url: string): Promise<object> {
    const path: string = url

    const res = await fetch(path)
    const json = await res.json()

    return json
  }

  weatherForCity(): Promise<object> {
    return this.reqApi(this.getUrlString('cityName'))
  }

  weatherForId(): Promise<object> {
    return this.reqApi(this.getUrlString('cityID'))
  }

  weatherForGeo(): Promise<object> {
    return this.reqApi(this.getUrlString('geocoordinates'))
  }

  weatherForZip(): Promise<object> {
    return this.reqApi(this.getUrlString('zip'))
  }

  getWeatherUpdates(callback: Function): void {
    callback(this.weatherForZip())

    this.interval = setInterval(() => {
      callback(this.weatherForZip())
    }, 10000) // 1800000
  }

  endWeatherUpdates(): string {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = undefined
      return 'Interval Stopped Successfully'
    }
    return 'No Interval to Stop'
  }
}

exports.WeatherOrNot = WeatherOrNot