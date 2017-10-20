import styles from '../sass/main.sass';


const keyboardKey       = 32;
const siteBackground    = document.body;
const siteHexContainer  = document.getElementById('siteHexContainer');
const colorRange        = 'ABCDEF0123456789';


var generateColor = () => {
  let newHexValue = '#';
  for (let i = 0; i < 6; i++) newHexValue += colorRange.charAt(Math.floor(Math.random() * colorRange.length));
  updateBackgroundColor(newHexValue);
  updateTextValue(newHexValue);
};

var updateBackgroundColor = (newColor) => {
  siteBackground.style.backgroundColor = newColor;
};

var updateTextValue = (newColor) => {
  siteHexContainer.innerHTML = newColor;
  siteHexContainer.classList.add('content__text--hex');
};

document.body.onkeyup = function(ev){
  if (ev.keyCode === keyboardKey) generateColor();
};
