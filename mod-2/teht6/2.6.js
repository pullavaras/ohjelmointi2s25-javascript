'use strict';

function throw_dice() {
    return Math.floor(Math.random()*6) + 1;
}

while (true) {
    const roll = throw_dice();
    document.querySelector("#target").innerHTML += "<li>" + roll + "</li>";
    if (roll === 6) {
        break;
    }
}