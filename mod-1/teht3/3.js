
const numero1 = Number(prompt('Anna 1. kokonaisluku: '))
const numero2 = Number(prompt('Anna 2, kokonaisluku:'))
const numero3 = Number(prompt('Anna 3. kokonaisluku:'))

const sum = (numero1 + numero2 + numero3)
const product = numero1 * numero2 * numero3
const avg = sum / 3

document.querySelector("#target").innerHTML =
    "summa: " + sum +
    "<br>luvut kerrottuna keskenään: " + product +
    "<br>Keskiarvo: " + avg;
