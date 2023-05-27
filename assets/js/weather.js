let dom = document;

let cityChoice = dom.getElementById('weather-select');

const apiKey = "b45de6e3810499e2e37ff5f2655af8ff";
const unit = "metric";
// const code = "AU";
let temp = dom.getElementById('temp');
let description = dom.getElementById('description');
let cityLocation = dom.getElementById('city-name');
let weatherImage = dom.getElementById('weather-image');

function getKey(){
    fetch(`https://dev.screencraft.net.au/~parkjong/assets/downloads/test.txt`)
        .then((res) => res.text() )
        .then((data)=> console.log(data))
        .catch((err) => console.log(err));
}

getKey();

async function getWeatherDetails() {
    let cityName = cityChoice.value;
    if (!cityName) {
        cityName = 'perth'
    }
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`)
        .then(function (resp) {
            return resp.json()
        }) // Convert data to json
        .then(function (data) {
            // console.log(data);
            temp.innerHTML = `${data['main']['temp'].toFixed(1)}&deg;C`;
            cityLocation.innerHTML = `${data['name']}, ${data['sys']['country']}`;
            description.innerHTML = `${data['weather'][0]['description']}`;
            // cityLocation.innerHTML = `${cityName.charAt(0).toUpperCase()
            // + cityName.slice(1)}, ${code}`;
            weatherImage.src = `../../assets/img/weather/${data['weather'][0]['icon']}.svg`;
            if (data['main']['temp'] >= 26) {
                temp.style.color = '#C3272B';
            } else {
                temp.style.color = '#22A7F0';
            }

        })
        .catch(function (err) {
            console.log(err)
        });
}

cityChoice.addEventListener('change', getWeatherDetails);

window.onload = getWeatherDetails;

setInterval(getWeatherDetails, 600000);
