
const API_KEY = "02161a10a5945cd60491f2f09724b24c";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        console.log(data);
        const name = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp;

        weatherContainer.innerHTML = `${weather}, ${temp}`;
        cityContainer.innerHTML = name;
    });
}

function onGeoError(){

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

