const request = require('request')
const geocode = require('./utils/geocode')


// const url = 'http://api.weatherstack.com/current?access_key=188ced6669489eee2874ce72ea39662a&query=37.8,-122.4&units=f'

// request({ url: url, json: true}, (error, response) => {
//     if(error){
//         console.log("Unable to connect to weather service!");
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees outside.")
//     }
// })
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (longitude, latitude, callback) => {

}

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})