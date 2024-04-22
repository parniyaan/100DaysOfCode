const image = document.querySelector('img');
const humidity = document.querySelector('.humidity-value');
const windSpeed = document.querySelector('.speed-wind');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const search = document.querySelector('.search-icon');
const input = document.querySelector('input');
const moreInformation = document.querySelector('.more-information');


function information() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=ea56be429520cd845dc72002c869cf76&units=metric`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert('Invalid country name ');
            }
        })
        .then(displayData)
        .catch(error => console.log(error));
}

const displayData = (weather) => {
    temperature.innerHTML = `${Math.floor(weather.main.temp)}°C`;
    description.textContent = weather.weather[0].description;
    humidity.textContent = `${weather.main.humidity}%`;
    windSpeed.textContent = `${weather.wind.speed} m/s`;

    const weatherCondition = weather.weather[0].main.toLowerCase();

    image.style.height = '200px';
    moreInformation.style.display = 'flex';

    if (weatherCondition === 'rain') {
        image.src = './images/clouds-cloudy-rain-sunny-weather.svg';
    } else if (weatherCondition === 'clear') {
        image.src = './images/sun-sunny-temperature-weather.svg';
    } else if (weatherCondition === 'clouds') {
        image.src = './images/cloudy.svg';
    } else if (weatherCondition === 'snow') {
        image.src = './images/clouds-snow-weather-winter.svg';
    } else if (weatherCondition === 'haze') {
        image.src = './images/clouds-cloudy-fog-foggy-weather.svg';
    }

};

search.addEventListener('click', information);
