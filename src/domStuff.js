function domRequest(weather){
    
    document.getElementById('location').textContent = weather.location;
    document.getElementById('condition').textContent = weather.text;
    document.getElementById('temp').textContent = weather.temp + '°';
    document.getElementById('conImg').src = weather.icon;
    document.getElementById('feels').textContent = weather.feels + '°';
    document.getElementById('hum').textContent = weather.hum + '%';
    document.getElementById('humTit').textContent ="Humidity";
    document.getElementById('feelsTit').textContent ="Feels Like";

    console.log('kk')

    
}

function loading() {
    document.getElementById('location').textContent = "Loading...";
    document.getElementById('condition').textContent = "";
    document.getElementById('temp').textContent = "";
    document.getElementById('conImg').src = "";
    document.getElementById('feels').textContent ="";
    document.getElementById('hum').textContent = "";
    document.getElementById('humTit').textContent ="";
    document.getElementById('feelsTit').textContent ="";

}

function error() {
    document.getElementById('location').textContent = "Not Found";
    document.getElementById('condition').textContent = "";
    document.getElementById('temp').textContent = "";
    document.getElementById('conImg').src = "";
    document.getElementById('feels').textContent ="";
    document.getElementById('hum').textContent = "";
    document.getElementById('humTit').textContent ="";
    document.getElementById('feelsTit').textContent ="";

}
export {domRequest, loading, error}