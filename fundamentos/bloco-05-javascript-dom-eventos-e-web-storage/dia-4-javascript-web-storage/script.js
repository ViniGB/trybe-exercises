const clickBackgroundColor = document.getElementById('background');

function changeBackgroundColor () {

  const input = document.getElementById('backgroundColor');
  const backgroundColor = document.body;
  backgroundColor.style.backgroundColor = input.value;
  const bgColorStorage = input.value;
  localStorage.setItem('bgColor', JSON.stringify(bgColorStorage));
};

clickBackgroundColor.addEventListener('click', changeBackgroundColor);

function onLoad () {
  const body = document.body;
  const backgroundColor = JSON.parse(localStorage.getItem('bgColor'));
  body.style.backgroundColor = backgroundColor;
};

window.onload = function() {
  onLoad();
}