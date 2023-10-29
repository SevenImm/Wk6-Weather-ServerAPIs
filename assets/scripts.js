// var weatherAPI = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIkey;
const APIkey = '0c6ba43fa0b2c135fd4db50b24680937';
// Select elements from HTML
const $input = document.getElementById('city-in');
const $searchBtn = document.getElementById('search-btn');
const $cityList = document.getElementById('cityLi');
const $currentWeatherCard = document.querySelector('.card-body');
const $clearStorageBtn = document.getElementById('clear-storage-btn');

let history = [];
// Function to initialize the page
function init() {
    // check if city history exist in local storage
    if (localStorage.getItem('cityHistory')) {
        history = JSON.parse(localStorage.getItem('cityHistory'));
    // populate the seach history list
        history.forEach((city) => {
            const $item = document.createElement('li');
            $item.className = 'list-group-item';
            $item.textContent = city;
            $item.addEventListener ('click',() =>{
            fetchWeatherData(city);
        });
        $cityList.appendChild($item);
        });
    }
}

    // Function to Add a city to the History
    function addToHistory(city) {
        // check if the city is already in the history
        if (!history.includes(city)) {
        // push the city to the array
        history.push(city);

        // Save the updated city history to local storage
        localStorage.setItem('cityHistory', JSON.stringify(history));

        // create and append the list item
        const $item = document.createElement('li');
        $item.className = 'list-group-item';
        $item.textContent = city;
        $item.addEventListener ('click', () => {
            fetchWeatherData(city)
        });
        $cityList.appendChild($item);
    }
}

// Function to clear the local storage and reset search History
function clearStorage() {
    // Clear the local Storage
    localStorage.removeItem('cityHistory');

    // Clear the search history displayed on the page
    $cityList.innerHTML = '';

    // Clear the current weather data
    $currentWeatherCard.innerHTML = '';
}
// Event listener for the Clear local storage button
$clearStorageBtn.addEventListener('click', clearStorage);

// Function fetch weather data from the OpenWeatherMap API
function fetchWeatherData(city) {
    // API URL + Added unit (farenheit)
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=imperial `;
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        // process the weather data
        displayWeatherData(data);
        // add the city to history
        addToHistory(city);
    })
    .catch((Error) => {
        console.error('Error fetching data:', Error);
    });
}
// Get weather data and display it to the page
function displayWeatherData(data) {
    const name = data.city.name;
    const current = data.list[0];
    const date = current.dt_txt;
    const temp = current.main.temp;
    const humidity = current.main.humidity;
    const windSpeed = current.wind.speed;
    const icon = current.weather[0].icon;

    // update the HTML elements with this data
    $currentWeatherCard.innerHTML = `
    <h2>${name}</h2>
    <p>Date:${date}</p>
    <p>Temperature:${temp} °F</p>
    <p>Humidity:${humidity}%</p>
    <p>Wind Speed: ${windSpeed} m/s </p>
    <img src='https://openweathermap.org/img/w/${icon}.png' alt='Weather icon">
    `;
    // Extract and display the 5-day forecast
    const forecast = data.list.slice(1, 6);
    const $forecastList = document.createElement('ul');
    $forecastList.className = 'list-group';

    forecast.forEach((day) => {
        const forecastDate = day.dt_txt;
        const forecastTemp = day.main.temp;
        const forecastHumidity = day.main.humidity;
        const forecastWindSpeed = day.wind.speed;
        const forecastIcon = day.weather[0].icon;

        const $item = document.createElement('li');
        $item.className = 'list-group-item bg-info-subtle';
        $item.innerHTML = `
        <p>Date:${forecastDate}</p>
        <p>Temperature:${forecastTemp} °F</p>
        <p>Humidity:${forecastHumidity}%</p>
        <p>Wind Speed: ${forecastWindSpeed} m/s </p>
        <img src='https://openweathermap.org/img/w/${forecastIcon}.png' alt='Weather icon">
        `;
        $forecastList.appendChild($item);
        });

        // Append the forecast list to the curent weather card
        $currentWeatherCard.appendChild($forecastList);
}

// Event Listener for the search button
$searchBtn.addEventListener('click', () => {
    const city = $input.value.trim();
    if (city) {
        fetchWeatherData(city);
        $input.value = ''; //Clear the input field
    }
});
window.addEventListener('load', init);
