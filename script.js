"use strict";


fetch(
  "http://api.weatherapi.com/v1/current.json?key=ae1558409c2a4c3390a163852241503&q=46750"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const markupLocation = `The current tempurature in <li>${data.location.name}, ${data.location.region} is</li>`;
    const markupCurrent = `<li>${data.current.temp_f}</li>`;
    document.querySelector('ul').insertAdjacentHTML('beforeend', markupLocation);
    document.querySelector('ul').insertAdjacentHTML('beforeend', markupCurrent);
    console.log(data.current.temp_f);
    console.log(data);
  });

// ae1558409c2a4c3390a163852241503;
