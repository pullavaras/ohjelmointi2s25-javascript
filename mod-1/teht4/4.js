'use strict';
const student = prompt("Kerro nimesi: ")

function sorting_hat (min, max) {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(4);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const student_house = sorting_hat()
if (student_house == 1) {
  document.querySelector("#target").innerHTML = student + ", you are a Gryffindor."
}
else if (student_house == 2) {
  document.querySelector("#target").innerHTML = student + ", you are a Slytherin."
}
else if (student_house == 3) {
  document.querySelector("#target").innerHTML = student + ", you are a Hufflepuff."
}
else {
  document.querySelector("#target").innerHTML = student + ", you are a Ravenclaw."
}
