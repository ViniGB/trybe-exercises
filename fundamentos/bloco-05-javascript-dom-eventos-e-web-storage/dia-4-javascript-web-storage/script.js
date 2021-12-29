const clickBackgroundColor = document.getElementById('background');
const input = document.getElementById('backgroundColor');
const clickTextColor = document.getElementById('text');
const inputText = document.getElementById('textColor');
const text = document.getElementById('paragraphtext');
const h1Color = document.getElementById('headertitle');
const fontSizeButton = document.getElementById('fontsize');
const lineHeightButton = document.getElementById('linespacing');
const fontFamilyButton = document.getElementById('fontfamily');
const arrayFontSize = ['xx-small', 'x-small', 'smaller', 'small', 'medium', 'large', 'larger', 'x-large', 'xx-large'];
const arrayLineHeight = ['25px', '30px', '35px', '40px', '45px', '50px'];
const backgroundColor = document.body;

// Setting Background Color
function changeBackgroundColor() {
  backgroundColor.style.backgroundColor = input.value;
  
  const bgColorStorage = input.value;
  localStorage.setItem('bgColor', JSON.stringify(bgColorStorage));
}
clickBackgroundColor.addEventListener('click', changeBackgroundColor);

// Setting Text Color
function changeTextColor() {
  text.style.color = inputText.value;
  h1Color.style.color = inputText.value;

  const textStorage = inputText.value;
  const h1ColorStorage = inputText.value;
  localStorage.setItem('text', JSON.stringify(textStorage));
  localStorage.setItem('h1Color', JSON.stringify(h1ColorStorage));
}
clickTextColor.addEventListener('click', changeTextColor);

// Setting Font Size
let i = 0;
function changeFontSize() {
  text.style.fontSize = arrayFontSize[i];
  i += 1;

  if (i === arrayFontSize.length) {
    i = 0;
  }

  const currentFontSize = text.style.fontSize;
  localStorage.setItem('fontSize', JSON.stringify(currentFontSize));
}
fontSizeButton.addEventListener('click', changeFontSize);

// Setting Line Spacing
let j = 0;
function changeLineHeight() {
  text.style.lineHeight = arrayLineHeight[j];
  j += 1;

  if (j === arrayLineHeight.length) {
    j = 0;
  }

  const currentLineHeight = text.style.lineHeight;
  localStorage.setItem('lineHeight', JSON.stringify(currentLineHeight));
}
lineHeightButton.addEventListener('click', changeLineHeight);

// Setting Font Family
function changeFontFamily() {
  text.style.fontFamily = this.value;

  const currentFontFamily = text.style.fontFamily;
  const currentOptionValue = this.value;
  localStorage.setItem('fontFamily', JSON.stringify(currentFontFamily));
  localStorage.setItem('optionValue', JSON.stringify(currentOptionValue));
}
fontFamilyButton.addEventListener('change', changeFontFamily);

// Setting onload config
function onLoad() {
  const bgColor = JSON.parse(localStorage.getItem('bgColor'));
  backgroundColor.style.backgroundColor = bgColor;

  const textInStorage = JSON.parse(localStorage.getItem('text'));
  text.style.color = textInStorage;

  const h1 = JSON.parse(localStorage.getItem('h1Color'));
  h1Color.style.color = h1;

  const size = JSON.parse(localStorage.getItem('fontSize'));
  text.style.fontSize = size;

  const lHeight = JSON.parse(localStorage.getItem('lineHeight'));
  text.style.lineHeight = lHeight;

  const fFamily = JSON.parse(localStorage.getItem('fontFamily'));
  text.style.fontFamily = fFamily;

  const cOption = JSON.parse(localStorage.getItem('optionValue'));
  fontFamilyButton.value = cOption;
}

window.onload = onLoad();
