// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const h2element = document.getElementById('jokeContainer');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  // Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => h2element.innerText = data.joke);
};

window.onload = () => fetchJoke();