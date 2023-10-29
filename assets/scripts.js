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

// initialice the object
let cityHistory = [];
// Add city data to the array
cityHistory.push('seattle');
cityHistory.push('Laredo');

// save the updated city history to local storage
localStorage.setItem('cityHistory', JSON.stringify(cityHistory));
// verify inputs in console
console.log(localStorage.cityHistory);