'use strict';

const dice_rolls = Number(prompt('How many dice rolls?'));

function throw_dice() {
    return Math.floor(Math.random()*6) + 1;
}

let sum = 0
for (let i = 0; i < dice_rolls; i++) {
    sum += throw_dice()
}

document.querySelector("#target").innerHTML = "The sum of the dice rolls is " + sum;