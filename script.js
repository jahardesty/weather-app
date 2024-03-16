"use strict";
console.log("hello");

fetch(
  "http://api.weatherapi.com/v1/current.json?key=ae1558409c2a4c3390a163852241503&q=90245"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.current.temp_f);
  });

// ae1558409c2a4c3390a163852241503;
