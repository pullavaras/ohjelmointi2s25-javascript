'use strict';

const numbers = [];
for (; ;) {
    const number = Number(prompt('Give a number or exit by entering zero.'));
    if (number === 0) {
        break;
    }
    numbers.push(number);
}

numbers.sort((a,b) => a-b);
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}