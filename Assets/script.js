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
const topCard = document.getElementById("topCard");
const srchBtn = document.getElementById("srchBtn")
const asideEl = document.getElementById("aside")
const listFive = document.getElementById("listFive")

const apiKey = "98ae7acbbf5494469916763d16791e78"
const unit = "c or °f"

function getApi(cityName) {
   
var requestF = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;

fetch(requestF)
.then(function(response) { 
    // console.log(response)
    return response.json();
})
//attempt to get the temp to display on the page
.then(function(data) {
    console.log(data)
    topCard
    .innerHTML = "";
    let date = document.createElement("p");
    let citytemp = document.createElement("p");
    let listCity = document.createElement("p");
    let windSpd = document.createElement("p");
    date.textContent = data.list[0].dt_txt.split(" ")[0];
    listCity.textContent = data.city.name;
    citytemp.textContent = data.list[0].main.temp;
    windSpd.textContent = data.list[0].wind.speed;
    topCard.append(date);
    topCard.append(listCity);
    topCard.append(citytemp);
    topCard.append(windSpd);
    citytemp.append(" °F");
    windSpd.append(" mph");
    console.log(topCard);



    // for (let i = 0; i < data.list.length; i+=8) { This wouldn't need any condition, but its less efficient if the data structure changes
    for (let i = 0; i < data.list.length; i++) {
        let x = data.list[i].dt_txt.split(" ")[1].split(":")[0];
        // console.log("DATA: ", x)
        if (x === "12") {
            console.log("RESULT: ", data.list[i])
        }
    }
})
};
//function to search cities
function getDataFromLS() {
    let getData = JSON.parse(localStorage.getItem("data"));
    for (let i = 0; i < getData.length; i++) {
        let btn = document.createElement("button");
        btn.innerText = getData[i];
        btn.onclick = x;
        asideEl.appendChild(btn);
    }
    //getApi(getData)
}

getDataFromLS()

function x (e) {
    let element = e.target.innerText
    getApi(element)
}

srchBtn.addEventListener('click', function () {
    const cityName = document.getElementById("search").value;
    getApi(cityName)
});

//Display 5 cards with temperature for 5 days