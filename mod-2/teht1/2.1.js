'use strict';

//function to ask for array numbers
function ask() {
    const numbers = [];
    for (let i = 0; i < 5; i++) {
        const number = Number(prompt('Enter a number'));
        numbers.push(number);
    }
    return numbers
}

const numbers = ask();
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}