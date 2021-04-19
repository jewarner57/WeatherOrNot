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
  getWeather('3ec9bf803e2be1709ff0a2b7dc503967', zip).then((w) => { console.log(w) })

})

// Functions
async function getWeather(key, zip) {
  const apiKey = key
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`

  const res = await fetch(path)
  const json = await res.json()

  return json
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
