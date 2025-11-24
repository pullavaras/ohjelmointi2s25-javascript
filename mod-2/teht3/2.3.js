'use strict';

function ask_dog_names() {
    const dogs = [];
    for (let i = 0; i < 6; i++) {
        const name = prompt("Enter a dog's name.")
        dogs.push(name)
        }
    return dogs.sort().reverse()
}

const dogs = ask_dog_names();
for (let i = 0; i < dogs.length; i++) {
    document.querySelector("#target").innerHTML += "<li>" + dogs[i] + "</li>";
}