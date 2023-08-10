//These are the DOM selectors for the various elements on the page
var city = document.getElementById("currentCityName")
var forecast_current_icon = document.getElementById("currentWeatherIcon")
var forecast_current_status = document.getElementById("currentWeatherStatus")
var forecast_current_temp = document.getElementById("currentTemp")
var forecast_current_wind = document.getElementById("currentWind")
var forecast_current_humid = document.getElementById("currentHumidity")

//These are the DOM selectors for the dropdown menus, submit button and input fields in the search function
var city_input = document.getElementById("cityInput")
var state_options = document.getElementById("stateOptions")
var country_options = document.getElementById("countryOptions")

var mainInfo = document.getElementById("searchInfo")
var submitButton = document.getElementById("searchSubmit")
var historySelection = document.querySelector(".panel-block");

//This is the DOM selector for the footer
var footerEl = document.getElementById("footer");

//API key for Open Weather API
const OPENWEATHER_API_KEY = "6ddb7b9eda44e747c0962325870a6579";

//List for all State and Countries
var stateList = [ '-', 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
var countryList = [{"name":"-", "code": "-"}, {"name": "Afghanistan", "code": "AF"}, {"name": "Aland Islands", "code": "AX"}, {"name": "Albania", "code": "AL"}, {"name": "Algeria", "code": "DZ"}, {"name": "American Samoa", "code": "AS"}, {"name": "Andorra", "code": "AD"}, {"name": "Angola", "code": "AO"}, {"name": "Anguilla", "code": "AI"}, {"name": "Antarctica", "code": "AQ"}, {"name": "Antigua and Barbuda", "code": "AG"}, {"name": "Argentina", "code": "AR"}, {"name": "Armenia", "code": "AM"}, {"name": "Aruba", "code": "AW"}, {"name": "Australia", "code": "AU"}, {"name": "Austria", "code": "AT"}, {"name": "Azerbaijan", "code": "AZ"}, {"name": "Bahamas", "code": "BS"}, {"name": "Bahrain", "code": "BH"}, {"name": "Bangladesh", "code": "BD"}, {"name": "Barbados", "code": "BB"}, {"name": "Belarus", "code": "BY"}, {"name": "Belgium", "code": "BE"}, {"name": "Belize", "code": "BZ"}, {"name": "Benin", "code": "BJ"}, {"name": "Bermuda", "code": "BM"}, {"name": "Bhutan", "code": "BT"}, {"name": "Bolivia", "code": "BO"}, {"name": "Bosnia and Herzegovina", "code": "BA"}, {"name": "Botswana", "code": "BW"}, {"name": "Bouvet Island", "code": "BV"}, {"name": "Brazil", "code": "BR"}, {"name": "British Indian Ocean Territory", "code": "IO"}, {"name": "Brunei Darussalam", "code": "BN"}, {"name": "Bulgaria", "code": "BG"}, {"name": "Burkina Faso", "code": "BF"}, {"name": "Burundi", "code": "BI"}, {"name": "Cambodia", "code": "KH"}, {"name": "Cameroon", "code": "CM"}, {"name": "Canada", "code": "CA"}, {"name": "Cape Verde", "code": "CV"}, {"name": "Cayman Islands", "code": "KY"}, {"name": "Central African Republic", "code": "CF"}, {"name": "Chad", "code": "TD"}, {"name": "Chile", "code": "CL"}, {"name": "China", "code": "CN"}, {"name": "Christmas Island", "code": "CX"}, {"name": "Cocos (Keeling) Islands", "code": "CC"}, {"name": "Colombia", "code": "CO"}, {"name": "Comoros", "code": "KM"}, {"name": "Congo", "code": "CG"}, {"name": "Congo, The Democratic Republic of the Congo", "code": "CD"}, {"name": "Cook Islands", "code": "CK"}, {"name": "Costa Rica", "code": "CR"}, {"name": "Cote D'Ivoire", "code": "CI"}, {"name": "Croatia", "code": "HR"}, {"name": "Cuba", "code": "CU"}, {"name": "Cyprus", "code": "CY"}, {"name": "Czech Republic", "code": "CZ"}, {"name": "Denmark", "code": "DK"}, {"name": "Djibouti", "code": "DJ"}, {"name": "Dominica", "code": "DM"}, {"name": "Dominican Republic", "code": "DO"}, {"name": "Ecuador", "code": "EC"}, {"name": "Egypt", "code": "EG"}, {"name": "El Salvador", "code": "SV"}, {"name": "Equatorial Guinea", "code": "GQ"}, {"name": "Eritrea", "code": "ER"}, {"name": "Estonia", "code": "EE"}, {"name": "Ethiopia", "code": "ET"}, {"name": "Falkland Islands (Malvinas)", "code": "FK"}, {"name": "Faroe Islands", "code": "FO"}, {"name": "Fiji", "code": "FJ"}, {"name": "Finland", "code": "FI"}, {"name": "France", "code": "FR"}, {"name": "French Guiana", "code": "GF"}, {"name": "French Polynesia", "code": "PF"}, {"name": "French Southern Territories", "code": "TF"}, {"name": "Gabon", "code": "GA"}, {"name": "Gambia", "code": "GM"}, {"name": "Georgia", "code": "GE"}, {"name": "Germany", "code": "DE"}, {"name": "Ghana", "code": "GH"}, {"name": "Gibraltar", "code": "GI"}, {"name": "Greece", "code": "GR"}, {"name": "Greenland", "code": "GL"}, {"name": "Grenada", "code": "GD"}, {"name": "Guadeloupe", "code": "GP"}, {"name": "Guam", "code": "GU"}, {"name": "Guatemala", "code": "GT"}, {"name": "Guernsey", "code": "GG"}, {"name": "Guinea", "code": "GN"}, {"name": "Guinea-Bissau", "code": "GW"}, {"name": "Guyana", "code": "GY"}, {"name": "Haiti", "code": "HT"}, {"name": "Heard Island and Mcdonald Islands", "code": "HM"}, {"name": "Holy See (Vatican City State)", "code": "VA"}, {"name": "Honduras", "code": "HN"}, {"name": "Hong Kong", "code": "HK"}, {"name": "Hungary", "code": "HU"}, {"name": "Iceland", "code": "IS"}, {"name": "India", "code": "IN"}, {"name": "Indonesia", "code": "ID"}, {"name": "Iran", "code": "IR"}, {"name": "Iraq", "code": "IQ"}, {"name": "Ireland", "code": "IE"}, {"name": "Isle of Man", "code": "IM"}, {"name": "Israel", "code": "IL"}, {"name": "Italy", "code": "IT"}, {"name": "Jamaica", "code": "JM"}, {"name": "Japan", "code": "JP"}, {"name": "Jersey", "code": "JE"}, {"name": "Jordan", "code": "JO"}, {"name": "Kazakhstan", "code": "KZ"}, {"name": "Kenya", "code": "KE"}, {"name": "Kiribati", "code": "KI"}, {"name": "Korea, Democratic Peoples Republic of Korea", "code": "KP"}, {"name": "Korea, Republic of Korea", "code": "KR"}, {"name": "Kuwait", "code": "KW"}, {"name": "Kyrgyzstan", "code": "KG"}, {"name": "Lao Peoples Democratic Republic", "code": "LA"}, {"name": "Latvia", "code": "LV"}, {"name": "Lebanon", "code": "LB"}, {"name": "Lesotho", "code": "LS"}, {"name": "Liberia", "code": "LR"}, {"name": "Libyan Arab Jamahiriya", "code": "LY"}, {"name": "Liechtenstein", "code": "LI"}, {"name": "Lithuania", "code": "LT"}, {"name": "Luxembourg", "code": "LU"}, {"name": "Macao", "code": "MO"}, {"name": "Macedonia, The Former Yugoslav Republic of Macedonia", "code": "MK"}, {"name": "Madagascar", "code": "MG"}, {"name": "Malawi", "code": "MW"}, {"name": "Malaysia", "code": "MY"}, {"name": "Maldives", "code": "MV"}, {"name": "Mali", "code": "ML"}, {"name": "Malta", "code": "MT"}, {"name": "Marshall Islands", "code": "MH"}, {"name": "Martinique", "code": "MQ"}, {"name": "Mauritania", "code": "MR"}, {"name": "Mauritius", "code": "MU"}, {"name": "Mayotte", "code": "YT"}, {"name": "Mexico", "code": "MX"}, {"name": "Micronesia, Federated States of Micronesia", "code": "FM"}, {"name": "Moldova, Republic of Moldova", "code": "MD"}, {"name": "Monaco", "code": "MC"}, {"name": "Mongolia", "code": "MN"}, {"name": "Montenegro", "code": "ME"}, {"name": "Montserrat", "code": "MS"}, {"name": "Morocco", "code": "MA"}, {"name": "Mozambique", "code": "MZ"}, {"name": "Myanmar", "code": "MM"}, {"name": "Namibia", "code": "NA"}, {"name": "Nauru", "code": "NR"}, {"name": "Nepal", "code": "NP"}, {"name": "Netherlands", "code": "NL"}, {"name": "Netherlands Antilles", "code": "AN"}, {"name": "New Caledonia", "code": "NC"}, {"name": "New Zealand", "code": "NZ"}, {"name": "Nicaragua", "code": "NI"}, {"name": "Niger", "code": "NE"}, {"name": "Nigeria", "code": "NG"}, {"name": "Niue", "code": "NU"}, {"name": "Norfolk Island", "code": "NF"}, {"name": "Northern Mariana Islands", "code": "MP"}, {"name": "Norway", "code": "NO"}, {"name": "Oman", "code": "OM"}, {"name": "Pakistan", "code": "PK"}, {"name": "Palau", "code": "PW"}, {"name": "Palestinian Territory, Occupied", "code": "PS"}, {"name": "Panama", "code": "PA"}, {"name": "Papua New Guinea", "code": "PG"}, {"name": "Paraguay", "code": "PY"}, {"name": "Peru", "code": "PE"}, {"name": "Philippines", "code": "PH"}, {"name": "Pitcairn", "code": "PN"}, {"name": "Poland", "code": "PL"}, {"name": "Portugal", "code": "PT"}, {"name": "Puerto Rico", "code": "PR"}, {"name": "Qatar", "code": "QA"}, {"name": "Reunion", "code": "RE"}, {"name": "Romania", "code": "RO"}, {"name": "Russian Federation", "code": "RU"}, {"name": "Rwanda", "code": "RW"}, {"name": "Saint Helena", "code": "SH"}, {"name": "Saint Kitts and Nevis", "code": "KN"}, {"name": "Saint Lucia", "code": "LC"}, {"name": "Saint Pierre and Miquelon", "code": "PM"}, {"name": "Saint Vincent and the Grenadines", "code": "VC"}, {"name": "Samoa", "code": "WS"}, {"name": "San Marino", "code": "SM"}, {"name": "Sao Tome and Principe", "code": "ST"}, {"name": "Saudi Arabia", "code": "SA"}, {"name": "Senegal", "code": "SN"}, {"name": "Serbia", "code": "RS"}, {"name": "Seychelles", "code": "SC"}, {"name": "Sierra Leone", "code": "SL"}, {"name": "Singapore", "code": "SG"}, {"name": "Slovakia", "code": "SK"}, {"name": "Slovenia", "code": "SI"}, {"name": "Solomon Islands", "code": "SB"}, {"name": "Somalia", "code": "SO"}, {"name": "South Africa", "code": "ZA"}, {"name": "South Georgia and the South Sandwich Islands", "code": "GS"}, {"name": "Spain", "code": "ES"}, {"name": "Sri Lanka", "code": "LK"}, {"name": "Sudan", "code": "SD"}, {"name": "Suriname", "code": "SR"}, {"name": "Svalbard and Jan Mayen", "code": "SJ"}, {"name": "Swaziland", "code": "SZ"}, {"name": "Sweden", "code": "SE"}, {"name": "Switzerland", "code": "CH"}, {"name": "Syrian Arab Republic", "code": "SY"}, {"name": "Taiwan, Province of China", "code": "TW"}, {"name": "Tajikistan", "code": "TJ"}, {"name": "Tanzania, United Republic of Tanzania", "code": "TZ"}, {"name": "Thailand", "code": "TH"}, {"name": "Timor-Leste", "code": "TL"}, {"name": "Togo", "code": "TG"}, {"name": "Tokelau", "code": "TK"}, {"name": "Tonga", "code": "TO"}, {"name": "Trinidad and Tobago", "code": "TT"}, {"name": "Tunisia", "code": "TN"}, {"name": "Turkey", "code": "TR"}, {"name": "Turkmenistan", "code": "TM"}, {"name": "Turks and Caicos Islands", "code": "TC"}, {"name": "Tuvalu", "code": "TV"}, {"name": "Uganda", "code": "UG"}, {"name": "Ukraine", "code": "UA"}, {"name": "United Arab Emirates", "code": "AE"}, {"name": "United Kingdom", "code": "GB"}, {"name": "United States", "code": "US"}, {"name": "United States Minor Outlying Islands", "code": "UM"}, {"name": "Uruguay", "code": "UY"}, {"name": "Uzbekistan", "code": "UZ"}, {"name": "Vanuatu", "code": "VU"}, {"name": "Venezuela", "code": "VE"}, {"name": "Viet Nam", "code": "VN"}, {"name": "Virgin Islands, British", "code": "VG"}, {"name": "Virgin Islands, U.S.", "code": "VI"}, {"name": "Wallis and Futuna", "code": "WF"}, {"name": "Western Sahara", "code": "EH"}, {"name": "Yemen", "code": "YE"}, {"name": "Zambia", "code": "ZM"}, {"name": "Zimbabwe", "code": "ZW"}]

//FUNCTIONS TO ALWAYS RUN AT BEGINNING OF PAGE
setStatesandCountries();
setPageInfo();

//Local Storage array creation for saved searches
shParse = JSON.parse(localStorage.getItem("searchHistoryList"));
if (shParse == null) {
  var searchHistoryList = [];
} else {
  var searchHistoryList = shParse;
}


//START OF ALL SELECTOR CATEGORY SEARCH BAR
allA.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("allA").classList.add("is-active");
    document.getElementById("popularA").classList.remove("is-active");
    document.getElementById("searchhistoryA").classList.remove("is-active");
    document.getElementById("historyPanel").replaceChildren();

    var historyItem = [];
    searchHistoryList.forEach(history => {
        historyItem.push(history[0]);
    });
    //FEATURE IN DEVELOPMENT
    // var popularItem = ["Hong Kong", "London", "New York", "Japan", "Paris", "Cleveland", "Boston"]
    // popularItem.forEach(popular => {
    //     historyItem.push(popular);
    // });

    //PURPOSE: gets rid of duplicate values in the search history list
    //PARAMETERS: arr: an array with duplicates
    //RETURNS: unique: an arrau without duplicates
    function removeDuplicates(arr) {
        let unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
    historyItem = removeDuplicates(historyItem);
    
    for(var i = 0; i < historyItem.length; i++){
        var history = document.createElement("a")
        history.textContent = historyItem[historyItem.length - i - 1];
        history.classList.add("panel-block")
        document.getElementById("historyPanel").append(history);
    }

});
//START OF POPULAR SELECTOR CATEGORY SEARCH BAR
popularA.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("popularA").classList.add("is-active");
    document.getElementById("allA").classList.remove("is-active");
    document.getElementById("searchhistoryA").classList.remove("is-active");
    document.getElementById("historyPanel").replaceChildren();

    //FEATURE IN DEVELOPMENT
    // var popularItem = ["Hong Kong", "London", "New York", "Japan", "Paris", "Cleveland", "Boston"]
    
    // popularItem.forEach(item => {
    //     var popularItem = document.createElement("a")
    //     popularItem.textContent = item;
    //     popularItem.classList.add("panel-block")
    //     document.getElementById("historyPanel").append(popularItem);
    // });
    
});
//START OF SEARCH HISTORY CATEGORY SEARCH BAR
searchhistoryA.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("searchhistoryA").classList.add("is-active");
    document.getElementById("popularA").classList.remove("is-active");
    document.getElementById("allA").classList.remove("is-active");
    document.getElementById("historyPanel").replaceChildren();

    var historyItem = [];
    searchHistoryList.forEach(history => {
        historyItem.push(history[0]);
    });

    //PURPOSE: gets rid of duplicate values in the search history list
    //PARAMETERS: arr: an array with duplicates
    //RETURNS: unique: an arrau without duplicates
    function removeDuplicates(arr) {
        let unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
    historyItem = removeDuplicates(historyItem);
    
    //Shows last 5 searchs in the search history option
    for(var i = 0; i < 5; i++){
        if (i < historyItem.length){
            var history = document.createElement("a")
            history.textContent = historyItem[historyItem.length - i - 1];
            history.classList.add("panel-block")
            document.getElementById("historyPanel").append(history);
        }
    }
});

//START OF CLEAR HISTORY BUTTON
clearButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();
    window.location.reload();
});

//PURPOSE: loads previous city data when history is clicked
//PARAMETERS: a click on an 'a' element
//RETURNS: NONE
document.getElementById("historyPanel").addEventListener("click", function(event){
    event.preventDefault();
    //Finds the x and y position from the event and uses elementFromPoint to select the specific box
    var xPos = event.clientX;
    var yPos = event.clientY;
    var selectedElement = document.elementFromPoint(xPos, yPos)
    var cityName = selectedElement.textContent;
    
    var i = 0;
    while(i < searchHistoryList.length){
        if(searchHistoryList[i][0] === cityName){
            var stateName = searchHistoryList[i][1];
            var countryName = searchHistoryList[i][2]
            break;
        } 
        i++
    }
    setPageInfo(cityName, stateName, countryName);
});

//PURPOSE: to submit the selected information from the search section and processing
//PARAMETERS: a click on the 'high score' section
//RETURNS: NONE
mainInfo.addEventListener("submit", function(event){
    event.preventDefault();
    var city = city_input.value;
    city_input.value = "";
    var state = state_options.value;
    state_options.value = "-";
    var country = country_options.value;
    country_options.value = "-";

    //sets country value to country code rather than name
    Object.entries(countryList).forEach(countryObj => {
        const [key,value] = countryObj;
        if(value.name === country){
            country = value.code;
        }
    });

    if (city != "") {
        searchHistoryList.push([city, state, country])
        localStorage.setItem("searchHistoryList", JSON.stringify(searchHistoryList));
    }

    setPageInfo(city, state, country);
});

//PURPOSE: sets valid state and country options on the page
//PARAMETERS: NONE
//RETURNS: NONE
async function setStatesandCountries(){
//States populated via for each function
    stateList.forEach(stateAbv => {
        var stateChoice = document.createElement("option")
        stateChoice.textContent = stateAbv;
        state_options.append(stateChoice)
});
//Countries populated via object conversion into for each function
    Object.entries(countryList).forEach(country => {
        var countryChoice = document.createElement("option")
        const [key,value] = country;
        countryChoice.textContent = (value.name);
        country_options.append(countryChoice)
});

}

//PURPOSE: to set and pass required information to getCurrentWeather function and getForecast function
//PARAMETERS: input information from 'mainInfo' form event listner
//RETURNS: NONE
async function setPageInfo(city, state, country){
    getCurrentWeather(city, state, country);
    getForecast(city, state, country);
}


//PURPOSE: to fetch the OpenWeather API and use the information obtained from it to display on the web page
//PARAMETERS: currentCity: current city, currentState: current state, and currentCountry: current country
//RETURNS: NONE
async function getCurrentWeather(currentCity, currentState, currentCountry) {

    //If no info is currently loaded, displays nothing on page load
    if(currentCity === undefined && currentState === undefined && currentCountry === undefined) {
        return;
    }
    try{
    //If statement that verifies if a state is selected and adjusts accordingly if that is not the case
    if (currentState != "-"){
        var apiRequest = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "," + currentState + "," + currentCountry + "&units=imperial&APPID=6ddb7b9eda44e747c0962325870a6579";
        var apiCall = await fetch(apiRequest);
        var apiText = await apiCall.text();
        var weather_data = JSON.parse(apiText);

        if(weather_data.cod === "404") {
            throw new Error("Invalid request.")
            return;
        }
        //sets city text content on page if state is selected
        city.textContent = weather_data.name + ", " + currentState;
        city.style.fontSize = "45px";    

    } else {
        var apiRequest = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "," + currentCountry + "&units=imperial&APPID=6ddb7b9eda44e747c0962325870a6579";
        var apiCall = await fetch(apiRequest);
        if(apiCall.status === "404") {
        }
        var apiText = await apiCall.text();
        var weather_data = JSON.parse(apiText);

        if(weather_data.cod === "404") {
            throw new Error("Invalid request.")
            return;
        }

     //sets country value to country name rather than code
     Object.entries(countryList).forEach(countryObj => {
        const [key,value] = countryObj;
        if(value.code === currentCountry){
            currentCountry = value.name;
        }
    });
        //sets city text content on page if state is not selected, replacing with country
        city.textContent = weather_data.name + ", " + currentCountry;
        city.style.fontSize = "45px";    
    }
    } catch (e) {
        console.error(e);
        alert("Please provide valid inputs.");
    }
    


    //This section will create an icon link, create the icon, and then append it on the page in place
    var icon_link = "https://openweathermap.org/img/w/" + weather_data.weather[0].icon + ".png";
    forecast_current_icon.src = icon_link;
    forecast_current_icon.style.width = "85px";

    //This section will add the weather temperature 
    forecast_current_temp.textContent = Math.round(weather_data.main.temp) + "\u00B0" + "F";

    //This section will add the weather information under the icon
    forecast_current_status.textContent = "Condition: " + weather_data.weather[0].main;

    //This section will add the weather wind speed 
    forecast_current_wind.textContent = "Wind Speeds: " + Math.round(weather_data.wind.speed) + " MPH";

    //This section will add the weather humidity 
    forecast_current_humid.textContent = "Humidity: " + Math.round(weather_data.main.humidity) + "%";
}

//PURPOSE: to fetch the OpenWeather API and use the information obtained from it to display on the web page
//PARAMETERS: currentCity: current city, currentState: current state, and currentCountry: current country
//RETURNS: NONE
async function getForecast(currentCity, currentState, currentCountry) {
        //If no info is currently loaded, displays nothing on page load
        if(currentCity === undefined && currentState === undefined && currentCountry === undefined) {
            return;
        }
        try{
        //If statement that verifies if a state is selected and adjusts accordingly if that is not the case
        if (currentState != "-"){
            var apiRequest = "https://api.openweathermap.org/data/2.5/forecast?q=" + currentCity + "," + currentState + "," + currentCountry + "&units=imperial&APPID=6ddb7b9eda44e747c0962325870a6579";
            var apiCall = await fetch(apiRequest);
            var apiText = await apiCall.text();
            var weather_data = JSON.parse(apiText);
    
            if(weather_data.cod === "404") {
                throw new Error("Invalid request.")
                return;
            }
    
        } else {
            var apiRequest = "https://api.openweathermap.org/data/2.5/forecast?q=" + currentCity + "," + currentCountry + "&units=imperial&APPID=6ddb7b9eda44e747c0962325870a6579";
            var apiCall = await fetch(apiRequest);
            if(apiCall.status === "404") {
            }
            var apiText = await apiCall.text();
            var weather_data = JSON.parse(apiText);
    
            if(weather_data.cod === "404") {
                throw new Error("Invalid request.")
                return;
            }
    
         //sets country value to country name rather than code
         Object.entries(countryList).forEach(countryObj => {
            const [key,value] = countryObj;
            if(value.code === currentCountry){
                currentCountry = value.name;
            }
        });
        }
        } catch (e) {
            console.error(e);
            alert("Please provide valid inputs.");
        }

        var listNum = 5;
        for(var i = 0; i<5; i++){
            //Date for Five Day Forecast
            var dailyWeatherData = weather_data.list[listNum]
            var date = moment().add(i+1,'days');
            document.getElementById("fDate" + i).textContent = date.format('dddd, MMMM Do, YYYY');

            //Image for Five Day Forecast
            var icon_link = "https://openweathermap.org/img/w/" + dailyWeatherData.weather[0].icon + ".png";
            document.getElementById("fImg" + i).src = icon_link;
            document.getElementById("fImg" + i).style.width = "100px";

            //Temp for Five Day Forecast
            document.getElementById("fTemp" + i).textContent = Math.round(dailyWeatherData.main.temp) + "\u00B0" + "F";

            //Condition for Five Day Forecast
            document.getElementById("fCondit" + i).textContent = "Condition: " + dailyWeatherData.weather[0].main;

            //Wind for Five Day Forecast
            document.getElementById("fWind" + i).textContent = "Wind Speeds: " + Math.round(dailyWeatherData.wind.speed) + " MPH";

            //Humid for Five Day Forecast
            document.getElementById("fHumid" + i).textContent = "Humidity: " + Math.round(dailyWeatherData.main.humidity) + "%";

            listNum+=8;
        }

}