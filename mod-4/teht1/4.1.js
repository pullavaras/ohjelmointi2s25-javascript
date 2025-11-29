'use strict';

const form = document.querySelector('#tv-form');

form.addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const query = document.querySelector('#query').value;

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();

    console.log(data);
    console.log("First show:", data[0].show.name);

  } catch (error) {
    console.log(error.message);
  }
  });
