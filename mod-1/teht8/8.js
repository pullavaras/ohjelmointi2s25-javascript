'use strict';

const start_year = Number(prompt('Enter the start year.'));
const end_year = Number(prompt('Enter the end year.'));

for (let year = start_year; year <= end_year; year ++) {
      if (year % 400 === 0) {
    document.querySelector("#target").innerHTML += "<li>" + year + "</li>";
  }
  else if (year % 100 === 0) {
    document.querySelector("#target").innerHTML += "<li>" + year + "</li>";
  }
  else if (year % 4 === 0) {
    document.querySelector("#target").innerHTML += "<li>" + year + "</li>";
  }
}

