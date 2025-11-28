'use strict';

const target = document.querySelector('#target');
const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'First item';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Second item';
li2.classList.add('my-item');
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Third item';
ul.appendChild(li3);

target.appendChild(ul);
