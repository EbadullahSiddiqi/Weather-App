const input = document.querySelector('.input');
const btn = document.querySelector('.submit');
const result = document.querySelector('.result');

btn.addEventListener("click", () => {
    const city = input.value;
    console.log(city);
    if(city) {
        checkWeather(city);
    }
    else {
        alert("Enter City")
    }
})

function checkWeather(city) {
    const apiKey = '44abd1b208ca523e67e91132847f60d3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl).then(response => response.json())
    .then(data => {
        displayWeather(data);
    }).catch((error) => {
        console.log(error);
        result.innerText = "Wrong City!";
    })
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const cityName = data.name;
    const weatherText = `Weather in ${cityName}: ${temperature}°C`;
    result.textContent = weatherText;
}