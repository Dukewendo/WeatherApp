window.addEventListener("load", ()=> {

    let long;
    let lat;
    let temperatureDesription = document.querySelector(".weather-description");
    let temperatureDegees = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    


if(navigator.geolocation) {

navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=63bafb675061eea9e2ad745bf900e62f`

    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
              
        temperatureDegees.textContent = Math.round(data.main.temp - 273.15);
        temperatureDesription.textContent = data.weather[0].description;
        locationTimezone.textContent = data.name;
        const icon = data.weather[0].main;

        setIcons(icon, document.querySelector(".icon"))
                
    })
    
    .catch(err => {
        console.error(err);
    });

})


}else{
    h1.textContent ="This page requires your location to function..."
}

function setIcons(icon, iconID) {
    const skycons = new Skycons()
    const currentIcon = icon.toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
}

});
