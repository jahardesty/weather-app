"use strict";

function getZipCode() {
  let zipCode = document.getElementById("zipcode").value;

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=ae1558409c2a4c3390a163852241503&q=${zipCode}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const tempF = data.current.temp_f;
      const condition = data.current.condition.code;
      const isDay = data.current.is_day;
      let timeOfDay;
      let currentCondition;
      let iconFolderPath;
      // let iconCode = data.current.condition.icon;

      // const container = document.querySelector(".container");
      // container.className = "container";
      // container.classList.add(getBackgroundImageClass(tempF));

      fetch("weatherData.json")
        .then((response) => response.json())
        .then((weatherData) => {
          const weatherCode = weatherData.find(
            (entry) => entry.code === condition
          );

          const weatherIcon = document.getElementById("weatherIcon");
          let iconCode = weatherData.icon;

          if (isDay === 1) {
            timeOfDay = "day";
            currentCondition = weatherCode.day;
            iconFolderPath = "icons/day";
            iconCode = weatherCode.icon;
            weatherIcon.src = `${iconFolderPath}/${iconCode}.png`;
          } else {
            timeOfDay = "night";
            currentCondition = weatherCode.night;
            iconFolderPath = "icons/night";
            iconCode = weatherCode.icon;
            weatherIcon.src = `${iconFolderPath}/${iconCode}.png`;
          }
          console.log(weatherCode);
          console.log(timeOfDay);
          console.log(currentCondition);
          console.log(iconCode);
          console.log(iconFolderPath);
          console.log(condition);

          const displayCondition = `
    <div> <h5> ${currentCondition}</h5></div>`;
          document
            .querySelector("div.weather-info")
            .insertAdjacentHTML("afterend", displayCondition);

          const locationAndTempMarkup = `
    <div> <h3> ${data.location.name}, ${data.location.region} </h3></div>
    <div> <h4> ${data.current.temp_f}°F</h4></div>`;
          document
            .querySelector("div.weather-info")
            .insertAdjacentHTML("afterbegin", locationAndTempMarkup);
        });
    });
  // function getBackgroundImageClass(tempF) {
  //   if (tempF >= 50) {
  //     return "warm";
  //   } else if (tempF <= 37) {
  //     return "cold";
  //   } else {
  //     return "container";
  //   }
  // }
  function showWeatherIconElement() {
    let weatherIconElement = document.getElementById("weatherIcon");
    weatherIcon.style.display = "";
  }
  showWeatherIconElement();

  function showClearPageButton() {
    let clearButton = document.getElementById("clearPage");
    clearButton.style.display = "block";
  }
  showClearPageButton();

  function showApiCredit() {
    let apiCredit = document.getElementById("apiCredit");
    apiCredit.style.display = "block";
  }
  showApiCredit();

  function hideSearchInput() {
    let searchBar = document.getElementById("zipcode");
    searchBar.style.display = "none";
  }
  hideSearchInput();

  function hideSearchButton() {
    let searchButton = document.getElementById("searchButton");
    searchButton.style.display = "none";
  }
  hideSearchButton();
}

function clearPage() {
  document.getElementById("clearPage").addEventListener("click", function () {
    document.body.innerHTML = "";
    location.reload();
  });
}

clearPage();
