'use strict';

const question = confirm('Should I calculate the square root?');

if (question === true) {
  const number = Number(prompt('Enter a number to calculate the square root: '));
  if (number < 0) {
        document.querySelector("#target").innerHTML = "The square root of a negative number is not defined";
  }
  else {
    const square = Math.sqrt(number)
    document.querySelector("#target").innerHTML = "The square root is " + square;
  }
}
else {
    document.querySelector("#target").innerHTML = "The square root is not calculated.";
}

