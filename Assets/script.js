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
function getApi() {
var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=75056&appid=98ae7acbbf5494469916763d16791e78";

fetch(requestUrl)
.then(function(response) { 
    console.log(response)
    return response.json();
})
//attempt to get the temp to display on the page
.then(function (data) {
    for (var i = 0; i< data.length; i++) {
    console.log(data)
    let citytemp = document.createElement("p");
    citytemp.textContent = data[i].list.main.temp;
    tempCont.append(citytemp);
    console.log(tempCont);
}
})
}
testBtn.addEventListener('click',getApi);