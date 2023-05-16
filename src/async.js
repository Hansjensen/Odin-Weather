import * as logic from './logic.js';

async function getForecast(loc) {

        const location = "http://api.weatherapi.com/v1/forecast.json?key=e6dc67c92e1b4a5a93750817231505&q=" + loc + "&days=3&aqi=no&alerts=no";
        
        try {
            const fetchResponse = await fetch(location);
            const forecast = await fetchResponse.json();
            const object = logic.myWeatherData(forecast)
            console.log(object)
        } catch (e) {
            console.log(e)
        }
      
}



export {getForecast}