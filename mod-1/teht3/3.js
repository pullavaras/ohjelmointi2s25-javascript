'use strict';

const numero1 = prompt('Anna 1. kokonaisluku: ')
const numero2 = prompt('Anna 2. kokonaisluku:')
const numero3 = prompt('Anna 3. kokonaisluku:')

const sum = parseFloat(numero1 + numero2 + numero3)
product = numero1 * numero2 * numero3
avg = sum / 3

document.querySelector("#target").innerHTML = "summa: " + sum + "luvut kerrottuna keskenään: " + product + "Keskiarvo: " + avg;