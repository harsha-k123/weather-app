const apiKey = "badf26abb768d12c4c3e9d4a1aaabecf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}q=${city}&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    if (data.weather[0].main == "Clouds"){
        document.querySelector(".weather-icon").src = "clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        document.querySelector(".weather-icon").src = "clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        document.querySelector(".weather-icon").src = "rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        document.querySelector(".weather-icon").src = "drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        document.querySelector(".weather-icon").src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

