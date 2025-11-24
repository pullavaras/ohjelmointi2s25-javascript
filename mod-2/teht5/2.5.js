'use strict';

const numbers = [];
while (true) {
    let number = Number(prompt('Enter a number. If you enter the same number twice the program will stop.'));
    if (numbers.includes(number)) {
        break;
    }
    numbers.push(number);
}

numbers.sort((a,b) => b - a);
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}