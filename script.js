"use strict";

document.addEventListener("DOMContentLoaded", function () {
  getZipCode();
});

function getZipCode() {
  let zipCode = document.getElementById("zipcode").value;
  console.log(zipCode);

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=ae1558409c2a4c3390a163852241503&q=${zipCode}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
     
      const tempF = data.current.temp_f;
      const container = document.querySelector('.container');
      container.className = 'container';
      container.classList.add(getBackgroundImageClass(tempF));
      const locationAndTempMarkup = `
    <div> The current temperature in ${data.location.name}, ${data.location.region} is ${data.current.temp_f}℉ 
    </div>`;
      document
        .querySelector("div.weather-info")
        .insertAdjacentHTML("beforeend", locationAndTempMarkup);
    });

 function getBackgroundImageClass(tempF) {
  if (tempF >= 50) {
    return "warm";
  } else if (tempF <= 35) {
    return "cold";
  } else {
    return "container";
  }
 }
}

function clearPage() {
  document.getElementById("clearPage").addEventListener("click", function () {
    document.body.innerHTML = "";
    location.reload();
  });
}

clearPage();

//here is my API key for http://api.weatherapi.com
// ae1558409c2a4c3390a163852241503;
