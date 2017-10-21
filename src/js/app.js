import styles from '../sass/main.sass';


const keyboardKey       = 32;
const siteBackground    = document.body;
const siteHexContainer  = document.getElementById('siteHexContainer');
const menuButton        = document.getElementById('menuButton');
const menuContainer     = document.getElementById('menuContainer');
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

menuButton.addEventListener('mouseenter', function(ev) {
  menuContainer.classList.add('menu--reveal');
});

menuButton.addEventListener('mouseleave', function(ev) {
  menuContainer.classList.remove('menu--reveal');
});

menuButton.addEventListener('keyup', function(ev) {
  ev.preventDefault();
});

menuButton.addEventListener('click', function(ev) {
  if(menuButton.classList.contains('button--close')) {
    menuButton.classList.remove('button--close');
    menuContainer.classList.remove('menu--show');
  } else {
    menuButton.classList.add('button--close');
    menuContainer.classList.add('menu--show');
  }
});
