// Weather Demo

let dom = document;

let cityChoice = dom.getElementById('weather-select');

const code= config.MY_CODE;
const unit = "metric";
let temp = dom.getElementById('temp');
let description = dom.getElementById('description');
let cityLocation = dom.getElementById('city-name');
let weatherImage = dom.getElementById('weather-image');


// Get weather data from API
async function getWeatherDetails() {
    let cityName = cityChoice.value;
    const defaultCity = 'perth';
    if (!cityName) {
        cityName = defaultCity;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${code}&units=${unit}`
    await fetch(url)
        .then(function (resp) {
            return resp.json();
        }) // Convert data to json
        .then(function (data) {
            console.log(data);
            temp.innerHTML = `${data['main']['temp'].toFixed(1)}&deg;C`;
            description.innerHTML = `${data['weather'][0]['description']}`;
            cityLocation.innerHTML = `${data['name']}, ${data['sys']['country']}`;
            weatherImage.src = `../../assets/img/weather/${data['weather'][0]['icon']}.svg`;
            if (data['main']['temp'] >= 26) {
                temp.style.color = '#C3272B';
            } else {
                temp.style.color = '#22A7F0';
            }
        })
        .catch(function (err) {
            console.log(err);
        })
}

// Event Listener when dropdown menu selection changes.
cityChoice.addEventListener('change', getWeatherDetails);

window.onload = getWeatherDetails;

setInterval(getWeatherDetails, 600000);
