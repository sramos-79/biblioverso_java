async function fetchWeather(city) {
const url = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "21e3195e9bfeb6879e788ec605b09ab0";
const units = "metric";
const lang = "es";
const response = await fetch(`${url}?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`);
const data = await response.json();
return data;
}

async function updateWeatherCard(city) {
const weatherData = await fetchWeather(city);
console.log(weatherData);
document.getElementById("city").textContent = weatherData.name;
document.getElementById("temperature").textContent = weatherData.main.temp;
document.getElementById("weather").textContent = weatherData.weather[0].description;
document.getElementById("humidity").textContent = weatherData.main.humidity;
document.getElementById("windSpeed").textContent = weatherData.wind.speed;
const iconCode = weatherData.weather[0].icon;
const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
document.getElementById("weatherIcon").src = iconUrl;
document.getElementById("weatherIcon").alt = weatherData.weather[0].description;
}

updateWeatherCard("Buenos Aires");
