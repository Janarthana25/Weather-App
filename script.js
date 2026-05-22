async function getWeather(){

    const apiKey = "a308b24041989dd0d9ad1ca22c474807";

    const city = document.getElementById("cityInput").value;

    const result = document.getElementById("weatherResult");

    if(city === ""){
        result.innerHTML = "Please enter city name";
        return;
    }

   const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        if(data.cod == "404"){
            result.innerHTML = "City not found";
        }

        else{

            result.innerHTML =
            `
            <h2>${data.name}</h2>
            <p>🌡 Temperature : ${data.main.temp} °C</p>
            <p>☁ Weather : ${data.weather[0].main}</p>
            <p>💧 Humidity : ${data.main.humidity}%</p>
            `;
        }

    }

    catch(error){

        result.innerHTML = "Error fetching weather";

    }
}