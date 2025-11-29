'use strict';

const form = document.querySelector('#tv-form');

form.addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const value = document.querySelector('#query').value;

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.log(error.message);
  }
});



