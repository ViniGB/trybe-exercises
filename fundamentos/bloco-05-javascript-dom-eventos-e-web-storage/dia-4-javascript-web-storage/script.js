// Setting Background Color
const clickBackgroundColor = document.getElementById('background');

function changeBackgroundColor () {

  const input = document.getElementById('backgroundColor');
  const backgroundColor = document.body;
  backgroundColor.style.backgroundColor = input.value;
  const bgColorStorage = input.value;
  localStorage.setItem('bgColor', JSON.stringify(bgColorStorage));
};

clickBackgroundColor.addEventListener('click', changeBackgroundColor);

// Setting Text Color
const clickTextColor = document.getElementById('text');

function changeTextColor () {

  const inputText = document.getElementById('textColor');
  const textColor = document.getElementById('paragraphtext');
  const h1Color = document.getElementById('headertitle');
  textColor.style.color = inputText.value;
  h1Color.style.color = inputText.value;
  const textColorStorage = inputText.value;
  const h1ColorStorage = inputText.value;
  localStorage.setItem('textColor', JSON.stringify(textColorStorage));
  localStorage.setItem('h1Color', JSON.stringify(h1ColorStorage));
};

clickTextColor.addEventListener('click', changeTextColor);

// Setting onload config
function onLoad () {
  const body = document.body;
  const backgroundColor = JSON.parse(localStorage.getItem('bgColor'));
  body.style.backgroundColor = backgroundColor;

  const text = document.getElementById('paragraphtext');
  const textColor = JSON.parse(localStorage.getItem('textColor'));
  text.style.color = textColor;

  const h1 = document.getElementById('headertitle');
  const h1Color = JSON.parse(localStorage.getItem('h1Color'));
  h1.style.color = h1Color;
};

window.onload = function() {
  onLoad();
}