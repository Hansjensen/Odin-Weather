import * as async from './async.js'

function myWeatherData(data) {
    
    const mydata = {
        temp: data.current.temp_f,
        wind:  data.current.wind_dir,
        hum: data.current.humidity,
        feels: data.current.feelslike_f,
        icon: data.current.condition.icon,
        text: data.current.condition.text,
        location: data.location.name
    }

    return mydata

}




export {myWeatherData}