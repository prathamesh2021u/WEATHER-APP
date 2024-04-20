const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'

    }

};

const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    getWeather(city.value)
})
getWeather("Pune")


// ==========================================================================================================================

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };

// const getWeather = (city) => {
//     const cityName = document.getElementById('cityName');
//     const cloud_pctElement = document.getElementById('cloud_pct');
//     const tempElement = document.getElementById('temp');
//     const feels_likeElement = document.getElementById('feels_like');
//     const humidityElement = document.getElementById('humidity');
//     const min_tempElement = document.getElementById('min_temp');
//     const max_tempElement = document.getElementById('max_temp');
//     const wind_speedElement = document.getElementById('wind_speed');
//     const wind_degreesElement = document.getElementById('wind_degrees');
//     const sunriseElement = document.getElementById('sunrise');
//     const sunsetElement = document.getElementById('sunset');

//     cityName.innerHTML = city;

//     fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response);

//             cloud_pctElement.innerHTML = response.cloud_pct;
//             tempElement.innerHTML = response.temp;
//             feels_likeElement.innerHTML = response.feels_like;
//             humidityElement.innerHTML = response.humidity;
//             min_tempElement.innerHTML = response.min_temp;
//             max_tempElement.innerHTML = response.max_temp;
//             wind_speedElement.innerHTML = response.wind_speed;
//             wind_degreesElement.innerHTML = response.wind_degrees;
//             sunriseElement.innerHTML = response.sunrise;
//             sunsetElement.innerHTML = response.sunset;
//         })
//         .catch(err => console.error(err));
// }

// document.getElementById('submit').addEventListener('click', (e) => {
//     e.preventDefault();
//     const cityInput = document.getElementById('city');
//     getWeather(cityInput.value);
// });
