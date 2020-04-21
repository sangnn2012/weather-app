const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=188ced6669489eee2874ce72ea39662a&query=37.8,-122.4&units=f'



request({ url: url, json: true}, (error, response) => {
    if(error){
        console.log("Unable to connect to weather service!");
    } else {
        console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out")
    }
})

// Geocoding
// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmlnaHR3YXk3IiwiYSI6ImNrOTlyMnljNjAzeTEzZ29sa2U0bjJueTUifQ.To3thxAYmzdbhHAbzPJ_2w&limit=1"


// Address -> Lat/Long -> Weather
// request({ url: geocodeURL, json: true}, (error, response) => {
//     const longitude = response.body.features[0].center[0]
//     const latitude = response.body.features[0].center[1]

//     console.log(longitude, latitude);
// })