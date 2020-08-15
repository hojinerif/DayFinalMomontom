const weather = document.querySelector(".js-weather")

const COORDS = 'coords';
const API_KEY = "42d0d2acdf67b8d92dd4466c92d49dd3";

function getWeather(lat,lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      const weath2 = json.weather["0"]["main"];
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText =`${weath2} - ${temperature} ℃ @ ${place}`;
    })
}



function saveCoords(coordsObj){
  localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
   console.log(position)
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const coordsObj = {
     latitude,
     longitude
   }
   saveCoords(coordsObj);
   getWeather(latitude,longitude);

}

function handleGeoError(position){
   console.log("can't access geo location.");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
  
}


function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords===null){
    askForCoords();
  }else{
    const parseCoords =JSON.parse(loadedCoords);
    console.log(parseCoords);
    getWeather(parseCoords.latitude,parseCoords.longitude)
  }
}


function init() {
  loadCoords()
}

init();