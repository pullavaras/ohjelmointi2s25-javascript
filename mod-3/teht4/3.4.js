'use strict';

const students = [
  {value: "2345768", name: "John"},
  {value: "2134657", name: "Paul"},
  {value: "5423679", name: "Jones"}
];

const target = document.querySelector('#target');
for (let i = 0; i < students.length; i++) {
    const option = document.createElement('option');
    option.value = students[i].value;
    option.innerText = students[i].name;
    target.appendChild(option);
}



