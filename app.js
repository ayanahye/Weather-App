const myContainer = document.getElementById("weather");
const button = document.getElementById("button");
const api = "930f829d12966067738d62a59392555c"


let getWeather = {
    fetchW: function (city) {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + api;
        fetch(url)
            .then((response) => response.json())
            .then((data) => this.display(data)); 
    },
    display: function(data) {
        let { name } = data;
        let { temp } = data.main;
        let { humidity } = data.main;
        let { icon, description } = data.weather[0]
        document.querySelector(".city").innerHTML = "Location: " + name
        document.querySelector(".temp").innerHTML = "Temperature: " + temp + "°C"
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%"
        document.querySelector(".description").innerHTML = "Weather: " + description
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    },

    search: function () {
        this.fetchW(document.getElementById("input").value);
    }

}

console.log("ok")

// button.addEventListener("click", getWeather.fetchW("input").value) ; 
//button.addEventListener("click", getWeather.fetchW("input".value));
document.querySelector(".button").addEventListener("click", function () {
    getWeather.search();
  });

console.log("ok2")

document
.querySelector(".button")
.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      getWeather.search();
      console.log("ok3")
    }
  });


getWeather.fetchW("Belgium");