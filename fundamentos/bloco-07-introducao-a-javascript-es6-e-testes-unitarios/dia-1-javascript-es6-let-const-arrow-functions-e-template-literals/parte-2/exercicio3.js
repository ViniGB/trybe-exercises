const clickButton = document.getElementById('clickme');
const clickCountP = document.getElementById('count');
clickCountP.innerHTML = 0;

const count = () => {
  let clickCount = 0;
  clickButton.addEventListener('click', function() {
    clickCount += 1;
    clickCountP.innerHTML = clickCount;
  })
}
count();