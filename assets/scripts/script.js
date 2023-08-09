//These are the DOM selectors for the various elements on the page
var city = document.getElementById("currentCityName")
var forecast_current_icon = document.getElementById("currentWeatherIcon")
var forecast_current_status = document.getElementById("currentWeatherStatus")
var forecast_current_temp = document.getElementById("currentTemp")
var forecast_current_wind = document.getElementById("currentWind")
var forecast_current_humid = document.getElementById("currentHumidity")


const OPENWEATHER_API_KEY = "6ddb7b9eda44e747c0962325870a6579";

getCurrentWeather("Cleveland")

 //PURPOSE: to fetch the OpenWeather API and use the information obtained from it to display on the web page
//PARAMETERS: the OpenWeather API link with the specific city needed
//RETURNS: NONE
async function getCurrentWeather(currentCity) {
    var apiRequest = "http://api.openweathermap.org/data/2.5/weather?q=" + currentCity + ",us&units=imperial&APPID=6ddb7b9eda44e747c0962325870a6579";
    var apiCall = await fetch(apiRequest);
    console.log(apiCall);
    var apiText = await apiCall.text();
    var weather_data = JSON.parse(apiText);
    console.log(weather_data);

    //This section will add the city name to the webpage, manually overrides the Bulma CSS using Javascript
    city.textContent = currentCity;
    city.style.fontSize = "45px";

    //This section will create an icon link, create the icon, and then append it on the page in place
    var icon_link = "http://openweathermap.org/img/w/" + weather_data.weather[0].icon + ".png";
    forecast_current_icon.src = icon_link;
    forecast_current_icon.style.width = "85px";

    //This section will add the weather temperature 
    forecast_current_temp.textContent = Math.round(weather_data.main.temp) + "\u00B0" + "F";

    //This section will add the weather information under the icon
    forecast_current_status.textContent = "Currently: " + weather_data.weather[0].main;

    //This section will add the weather wind speed 
    forecast_current_wind.textContent = "Wind Speeds: " + Math.round(weather_data.wind.speed) + " MPH";

    //This section will add the weather humidity 
    forecast_current_humid.textContent = "Humidity: " + Math.round(weather_data.main.humidity) + "%";
}