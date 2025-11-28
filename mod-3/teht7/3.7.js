'use strict';

const trigger = document.getElementById('trigger');
const pic = document.getElementById('target');

trigger.addEventListener('mouseover', function () {
    pic.src = "picB.jpg";
});

trigger.addEventListener('mouseout', function () {
    pic.src = "picA.jpg";
});

