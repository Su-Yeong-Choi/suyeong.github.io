const API_KEY = "4a1d531f8b3d234696fec58797f0eca1";
const weatherArea = document.querySelector("#weather-area");
const weather = weatherArea.querySelector("#weather");
const city = weatherArea.querySelector("#city");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url).then(response => response.json()).then(data => {
        weather.innerHTML = `${data.weather[0].main}, ${Math.floor(data.main.temp)}\&#8451`;
        city.innerHTML = `<i class="fa-solid fa-location-dot"> ${data.name}</i>`;
    });
}

function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);