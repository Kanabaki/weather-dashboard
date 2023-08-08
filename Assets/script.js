// I WANT to see the weather outlook for multiple cities
// SO THAT I can plan a trip accordingly
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
const tempCont = document.getElementById("temp");
const testBtn = document.getElementById("testBtn")
const cityName = "Lewisville"
const apiKey = "98ae7acbbf5494469916763d16791e78"
const unit = "c or °f"


function getApi() {
var requestF = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;

fetch(requestF)
.then(function(response) { 
    // console.log(response)
    return response.json();
})
//attempt to get the temp to display on the page
.then(function(data) {
    console.log(data)
    let date = document.createElement("p");
    let citytemp = document.createElement("p");
    let listCity = document.createElement("p");
    let windSpd = document.createElement("p");
    date.textContent = data.list[0].dt_txt;
    listCity.textContent = data.city.name;
    citytemp.textContent = data.list[0].main.temp;
    windSpd.textContent = data.list[0].wind.speed;
    tempCont.append(date);
    tempCont.append(listCity);
    tempCont.append(citytemp);
    tempCont.append(windSpd);
    citytemp.append(" °F");
    windSpd.append(" mph");
    console.log(temp);
})
};
testBtn.addEventListener('click',getApi);