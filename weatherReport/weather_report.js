function showWeatherDetails(event){
    event.preventDefault();
    const city = document.getElementById("city").value;
    const apiKey = 'd8a66408ce7933d915b7d9ccbb85f671';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
        <p>Temperature : ${data.main.temp} &#8451;</p>
        <p>Weather : ${data.weather[0].description}</p>`
    })
    .catch(error => {
        console.log("Error fetching weather:", error);
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    })
}

document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);