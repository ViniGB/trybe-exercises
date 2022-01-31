// Agora que temos a url vamos criar um arquivo ( api.js , por exemplo) e dentro dele uma função para pegar o array com as moedas.
// 1- Crie também um arquivo HTML ( index.html , por exemplo) que deve conter uma tag para listar as crypto moedas.
// 2- Pronto, temos um array com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas aparecam na tela. Utilize o seguinte formato: Nome da moeda (símbolo da moeda): valor em dólares . Exemplo: Bitcoin (BTC): 46785.06 .
// 3- Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o array das moedas para mostrar apenas as 10 primeiras?
// 4- Não se esqueça de estilizar a página conforme o seu estilo (tanto no CSS quanto no HTML).

const API_URL = 'https://api.coincap.io/v2/assets';

const cryptoElement = document.getElementById('cryptoContainer');

const fetchCrypto = async () => {
  const result = await fetch(API_URL)
    .then(response => response.json())
    .then(data => data.data.slice(0, 10).forEach(element => {
      const createList = document.createElement('li');
      createList.innerText = `${element.name} (${element.symbol}): ${Number(element.priceUsd).toFixed(2)}`;
      cryptoElement.appendChild(createList);
    }))
    .catch((error) => cryptoElement.innerText = `Algo deu errado :( \n${error}`)

  return result;
};

window.onload = () => fetchCrypto();