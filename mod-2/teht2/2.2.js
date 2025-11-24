'use strict';

function ask_names (participants) {
    const names = [];
    for (let i = 0; i < participants; i++) {
        const name = prompt('Enter the name of a participant.');
        names.push(name);
        }
    return names.sort();
}

const participants = Number(prompt('Enter the amount of people participating.'));
const names = ask_names(participants);

for (let i = 0; i < names.length; i++) {
    document.querySelector("#target").innerHTML += "<li>" + names[i] + "</li>";
}
