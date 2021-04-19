// ------------------------------------------------------
// Developer Code

// Get Element refererences
const tempEl = document.getElementById('temp')
const descEl = document.getElementById('desc')
const formEl = document.getElementById('form')
const zipInput = document.getElementById('zip')

// Define event listeners
formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  const zip = zipInput.value
  getWeather('3ec9bf803e2be1709ff0a2b7dc503967', zip, "zip", 'imperial').then((w) => { console.log(w) })

})

// Functions
async function getWeather(apiKey, location, locationType, units) {

  const locationString = getLocationString(location, locationType)
  const path = `https://api.openweathermap.org/data/2.5/weather?${locationString}&appid=${apiKey}&units=${units}`

  console.log(path)

  const res = await fetch(path)
  const json = await res.json()

  return json
}

function getLocationString(location, locationType) {
  let locationString = ""

  switch (locationType) {
    case "zip":
      locationString = `zip=${location}`
      break;
    case "cityID":
      locationString = `id=${location}`
      break;
    case "geocoordinates":
      locationString = `lat=${location.lat}&lon=${location.lon}`
      break;
    case "cityName":
    default:
      locationString = `q=${location}`
  }

  return locationString
}

// // Functions
// function getWeather(key, zip, callback) {
//   const apiKey = key
//   const units = 'imperial'
//   const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
//   fetch(path)
//     .then(res => res.json())
//     .then(json => {
//       callback(json)
//     })
//     .catch(err => console.log(err.message))
// }
