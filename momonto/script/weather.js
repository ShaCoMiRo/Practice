"use strict"

const weather = document.querySelector(".js-weather");

const OPENWEATHERMAP_API_KEY = "2ee5f7234d3dff5f9f2ffc0e3012ea4d";
const COORED_LS = 'coords';

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`).then(function(response) {
        return response.json();
    }).then(function(json) {
        const temprature = json.main.temp;
        const location = json.name;

        weather.innerHTML = `${temprature} @ ${location}`;
    });
} 

function saveCoords(coordsObj) {
    localStorage.setItem(COORED_LS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    console.log(position);

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    
}

function handleGeoError() {
    console.log("cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORED_LS);

    if(loadedCords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();