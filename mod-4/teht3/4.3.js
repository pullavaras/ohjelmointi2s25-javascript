'use strict';

const form = document.querySelector('#tv-form');
const results = document.querySelector('#results');

form.addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const value = document.querySelector('#query').value;

  results.innerHTML = '';

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
    const data = await response.json();

    for (let item of data) {

      const art = document.createElement('article');

      const h2 = document.createElement('h2');
      h2.textContent = item.show.name;
      art.appendChild(h2);

      const a = document.createElement('a');
      a.href = item.show.url;
      a.target = '_blank';
      a.textContent = item.show.url;
      art.appendChild(a);

      const img = document.createElement('img');
      img.src = item.show.image?.medium || '';
      img.alt = item.show.name;
      art.appendChild(img);

      const div = document.createElement('div');
      div.innerHTML = item.show.summary;
      art.appendChild(div);

      results.appendChild(art);
    }

  } catch (err) {
    console.log(err.message);
  }
});
