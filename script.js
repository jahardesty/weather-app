"use strict";

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
      const locationAndTempMarkup = `
    <div> The current temperature in ${data.location.name}, ${data.location.region} is ${data.current.temp_f}℉ 
    </div>`;
      //   const markupLocation = `The current temperature in <li>${data.location.name}, ${data.location.region} is</li>`;
      //   const markupCurrent = `<li>${data.current.temp_f}℉</li>`;
      document
        .querySelector("div.weather-info")
        .insertAdjacentHTML("beforeend", locationAndTempMarkup);
      document
        .querySelector("div.weather-info")
        .insertAdjacentHTML("beforeend", markupCurrent);
      //   console.log(data.current.temp_f);
      //   console.log(data);
    });
}

getZipCode();

//here is my API key for http://api.weatherapi.com
// ae1558409c2a4c3390a163852241503;
